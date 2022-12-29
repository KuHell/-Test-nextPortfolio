import Link from 'next/link';

const HeaderBar = () => {
  const navTitle = ['Project', 'About', 'Contact'];

  return (
    <div className='flex flex-row flex-wrap content-center justify-between h-[150px] text-xl sticky top-0 bg-black'>
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
          {navTitle.map((item) => (
            <li className='float-left' key={item}>
              <Link
                className='hover:opacity-50 hover:duration-500'
                href={`/` + item.toLowerCase()}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
