import React from 'react';
import { Props } from '../../types';
import HeaderBar from './HeaderBar';

const Layout = (props: Props) => {
  return (
    <div className='flex content-center justify-center w-full text-white bg-black'>
      <div className='w-[1200px]'>
        <HeaderBar />
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
