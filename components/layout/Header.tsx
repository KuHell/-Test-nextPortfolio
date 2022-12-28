import Link from 'next/link';

const HeaderBar = () => {
  return (
    <div className='flex flex-row flex-wrap content-center justify-between h-[150px] text-xl'>
      <div className='mx-[100px]'>
        <Link
          className='hover:tracking-[0.2px] hover:opacity-50 hover:hover:duration-500'
          href='/'
        >
          Main Logo Section
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row gap-10 list-none mx-[100px]'>
          <li className='float-left'>
            <Link
              className='hover:opacity-50 hover:duration-500'
              href='/project'
            >
              Project
            </Link>
          </li>
          <li className='float-left'>
            <Link
              className='hover:opacity-50 hover:hover:duration-500'
              href='/about'
            >
              About
            </Link>
          </li>
          <li className='float-left'>
            <Link
              className='hover:opacity-50 hover:hover:duration-500'
              href='/contact'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
