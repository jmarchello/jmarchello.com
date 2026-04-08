#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <content-dir>"
  echo ""
  echo "Installs a systemd user path watcher that monitors <content-dir> for"
  echo "changes and rebuilds the Hugo site using it as the content directory."
  echo ""
  echo "The Hugo project is assumed to be: $(cd "$(dirname "$0")" && pwd)"
  exit 1
}

if [[ $# -ne 1 ]]; then
  usage
fi

CONTENT_DIR="$(realpath "$1")"
HUGO_PROJECT="$(cd "$(dirname "$0")" && pwd)"
UNIT_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
UNIT_NAME="hugo-build"

if [[ ! -d "$CONTENT_DIR" ]]; then
  echo "Error: '$CONTENT_DIR' is not a directory"
  exit 1
fi

if ! command -v hugo &>/dev/null; then
  echo "Error: hugo is not installed or not in PATH"
  exit 1
fi

mkdir -p "$UNIT_DIR"

# --- systemd path unit ---
cat > "$UNIT_DIR/${UNIT_NAME}.path" <<EOF
[Unit]
Description=Watch ${CONTENT_DIR} for changes and rebuild Hugo site

[Path]
PathChanged=${CONTENT_DIR}
Unit=${UNIT_NAME}.service

[Install]
WantedBy=default.target
EOF

# --- systemd service unit ---
cat > "$UNIT_DIR/${UNIT_NAME}.service" <<EOF
[Unit]
Description=Rebuild Hugo site from ${CONTENT_DIR}

[Service]
Type=oneshot
WorkingDirectory=${HUGO_PROJECT}
ExecStart=$(command -v hugo) --contentDir ${CONTENT_DIR} --gc --minify
EOF

# --- enable and start ---
systemctl --user daemon-reload
systemctl --user enable --now "${UNIT_NAME}.path"

echo "Installed and started ${UNIT_NAME}.path"
echo "  Watching:  ${CONTENT_DIR}"
echo "  Project:   ${HUGO_PROJECT}"
echo "  Units:     ${UNIT_DIR}/${UNIT_NAME}.{path,service}"
echo ""
echo "Useful commands:"
echo "  systemctl --user status ${UNIT_NAME}.path     # watcher status"
echo "  systemctl --user status ${UNIT_NAME}.service   # last build status"
echo "  journalctl --user -u ${UNIT_NAME}.service      # build logs"
echo "  systemctl --user disable --now ${UNIT_NAME}.path  # uninstall"
