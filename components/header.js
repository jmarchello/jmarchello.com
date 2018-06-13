import theme from '../theme';

const Header = () => (
  <div className='header'>
    <style jsx>
      {`
        .header {
          height: 200px;
          width: 100vw;
          display: flex;
        }

        .title {
          padding: .5rem 1rem;
          flex: 1;
          text-align: left;
          color: ${theme.orange};
          font-weight: bold;
        }
      `}
    </style>
    <span className='title'>Josh Marchello</span>
  </div>
);

export default Header;
