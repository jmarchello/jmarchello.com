import Page from '../components/page';
import Header from '../components/header';

const Index = () => (
  <Page>
    <div className='marshmello-container'>
      <img src='/static/marshmello.gif' />
    </div>

    <style jsx>
      {`
        .marshmello-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </Page>
);

export default Index;
