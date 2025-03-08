import { Outlet } from 'react-router-dom';
import { HeaderMegaMenu } from '../Header/Header';
import Footer from '../Footer/Footer';

const AppLayout = () => {
  return (
    <>
      <header>
        <HeaderMegaMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default AppLayout;
