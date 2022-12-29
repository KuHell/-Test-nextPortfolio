import { Props } from '../../types';
import Footer from './Footer';
import Header from './Header';

const Layout = (props: Props) => {
  return (
    <div className='flex content-center justify-center min-h-screen text-white bg-black'>
      <div className='w-[1440px]'>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
