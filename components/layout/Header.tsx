import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderBar = () => {
  const navLink = ['Projects', 'About', 'Contact'];
  const route = useRouter();

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
              {link === 'Projects' ? (
                <Link href='/' as={`/#project-list`}>
                  {link}
                </Link>
              ) : (
                <Link
                  className='hover:opacity-50 hover:duration-500'
                  href={`/` + link.toLowerCase()}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
