import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="absolute left-1/2 -translate-x-1/2 z-10 mt-5 px-5 w-1/2">
      <nav className='flex justify-between align-middle bg-white/10 rounded-xl p-3 mx-auto'>
        <h1>
          <Link href={'/'}>brian.</Link>
        </h1>
        <ul className='flex gap-3'>
          <li>
            <Link href='/'>projects</Link>
          </li>
          <li>
            <Link href='/'>focus</Link>
          </li>
          <li>
            <Link href='/'>contact</Link>
          </li>
        </ul>
        <div className='flex gap-3'>
          <button>
            <FaGithub className='cursor-pointer' />
          </button>
          <button>
            <FaLinkedin className='cursor-pointer' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
