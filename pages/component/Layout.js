import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Nav/>
        {children}
      <Footer/>
    </>
  );
};

export default Layout;