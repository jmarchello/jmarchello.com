import Head from 'next/head';
import theme from '../theme';

const Page = ({ children }) => (
    <div className='page-root'>
      <Head>
        <title>Josh Marchello</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>
        {`
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans.ttf");
          }
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans-Bold.ttf");
              font-weight: bold;
          }
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans-Oblique.ttf");
              font-style: italic;
          }
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans-BoldOblique.ttf");
              font-weight: bold;
              font-style: italic;
          }
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans-Oblique.ttf");
              font-style: oblique;
          }
          @font-face {
              font-family: "DejaVu Sans";
              src: url("fonts/DejaVuSans-BoldOblique.ttf");
              font-weight: bold;
              font-style: oblique;
          }

          * {
            box-sizing: border-box;
          }

          html, body, .page-root {
            background-color: ${theme.darkblue};
            padding: 0;
            margin: 0;
            height: 100vh;
            font-size: 1.25rem;
            font-family: "DejaVu Sans", "Sans";
          }

        `}
      </style>
      { children }
  </div>
);

export default Page;
