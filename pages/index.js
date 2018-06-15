import Page from '../components/page';
import Header from '../components/header';
import theme from '../theme.js';

const Index = () => (
  <Page>
    <div className='header-container'>
      <img className='intro-image' src='/static/marshmello.gif' />
      <img className='header-image' src='/static/marshmello.png' />
    </div>
    <div className='intro-container'>
      <div className='typing-container'>
        <span className='typing-text'>
          Hi! I'm Josh Marchello.
        </span>
      </div>
    </div>

    <style jsx>
      {`
        .header-container, .intro-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-container {
          animation: header-intro 1s 3s ease forwards;
        }

        .intro-image {
          width: 200px;
          height: auto;
          margin: 5rem 0;
          animation: image-intro 1s 3s linear forwards,
                     disappear 0s 4s forwards;
        }

        .header-image {
            margin: 1rem;
            width: 50px;
            height: auto;
            opacity: 0;
            position: absolute;
            animation: appear 0s 4s forwards;
        }

        .typing-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(23, end) forwards;
        }

        .intro-container {
          animation: disappear 0s 3s forwards;
        }

        .typing-text {
          flex: 1;
          color: ${theme.orange};
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 380px }
        }

        @keyframes disappear {
          from {
            opacity: 1;
            position: static;
          }
          to {
            opacity: 0;
            position: absolute;
          }
        }

        @keyframes header-intro {
          0% { justify-content: center }
          1% {
            padding-left: 40vw;
          }
          5% {
            padding-left: 40vw;
            justify-content: flex-start;
          }
          100% {
            justify-content: flex-start;
            padding-left: 0;
          }
        }

        @keyframes image-intro {
          from {
            margin: 5rem 0;
            width: 200px;
          }
          to {
            margin: 1rem;
            width: 50px;
          }
        }

        @keyframes appear {
          from {
            position: absolute;
            opacity: 0;
          }
          to {
            position: static;
            opacity: 1;
          }
        }
      `}
    </style>
  </Page>
);

export default Index;
