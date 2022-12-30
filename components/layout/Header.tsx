import Link from 'next/link';

const HeaderBar = () => {
  const navLink = ['Project', 'About', 'Contact'];

  return (
    <div className='flex flex-row flex-wrap content-center justify-between h-[150px] text-xl sticky top-0 bg-black z-10'>
      <div>
        <Link
          className='hover:tracking-[0.2px] hover:opacity-50 hover:duration-500'
          href='/'
        >
          Main Logo Section
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row gap-10 list-none'>
          {navLink.map((link) => (
            <li className='float-left' key={link}>
              <Link
                className='hover:opacity-50 hover:duration-500'
                href={`/` + link.toLowerCase()}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
