import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MobileFooter from '../MobileFooter/MobileFooter';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileFooter />
    </>
  );
};

export default Layout;
