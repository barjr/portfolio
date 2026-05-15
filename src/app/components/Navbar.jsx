import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className='p-5'>
      <nav className='flex justify-between align-middle text-xl'>
        <h1><Link href={'/'}>brian.</Link></h1>
        <ul className='flex gap-3'>
          <li>
            <Link href='/'>projects</Link>
          </li>
          <li>
            <Link href='/'>skills</Link>
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
            <FaGithub />
          </button>
          <button>
            <FaLinkedin />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
