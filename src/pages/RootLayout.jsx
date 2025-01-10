import { Outlet, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  const params = useParams();
  const { projectId } = params;

  return (
    <>
      <Header />
      {!projectId ? (
        <>
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <div className='detail-wrap'>
          <Outlet />
        </div>
      )}
      <Footer />
    </>
  );
};

export default RootLayout;
