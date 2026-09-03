import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='absolute left-1/2 -translate-x-1/2 z-100 mt-5 px-5 w-1/2'>
      <nav className='flex justify-between items-center bg-white/10 rounded-xl p-3 px-5 mx-auto'>
        <h1>
          <Link href={'/'}>brian.</Link>
        </h1>
        <ul className='flex gap-3'>
          <li>
            <Link href='#projects'>projects</Link>
          </li>
          <li>
            <Link href='#focus'>focus</Link>
          </li>
          <li>
            <Link href='#contact'>contact</Link>
          </li>
        </ul>
        <div className='flex gap-3'>
          <Link
            href='https://github.com/barjr'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='relative z-20'
          >
            <FaGithub className='cursor-pointer pointer-events-auto' />
          </Link>

          <a
            href='https://linkedin.com/in/barjr'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='relative z-20'
          >
            <FaLinkedin className='cursor-pointer pointer-events-auto' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
