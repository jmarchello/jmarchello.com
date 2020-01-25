---
title: An introduction to Python
date: "2020-01-14"
draft: true
---

Python is becoming one of those ubiquitous languages that you see everywhere. Given this, and the fact that it's used quite a bit in my company, I thought I'd finally take the time to learn it. In an attempt to better capture what I'm learning for myself and others, I figured I'd write about it as I went. I tend to learn new programming languages much the same way I learn spoken languages, by cross-referencing them to languages I already know. Because of this, you'll probably notice some comparisons to Ruby and JavaScript throughout my writing, as those are my most familiar languages to date.

## Syntax Overview

Instead of starting out by explaining how to install Python and all that, let me first just give you a taste of what Python looks and feels like. Here's a simple Python function:

```python
def calculate_tip(percent, bill_total):
  percent_float = int(percent)/100
  return bill_total * percent_float
```

You'll notice a few unique things about this function compared to other languages:

- `def` is the keyword used to say "I'm defining a function" (this will look familiar to ruby developers)
