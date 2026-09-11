import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/anakin.jpg';
import github from '../public/github.png';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Header = () => {
  return (
    <header className='fixed top-5 z-20 flex w-full max-w-7xl items-center justify-between'>
      <div className='logo'>
        <Link href='/'>
          <Image
            src={logo}
            loading='eager'
            className='block w-15 h-15'
            alt='Logo'
          ></Image>
        </Link>
      </div>

      <nav
        aria-label='Main Navigation'
        className='rounded-full border border-white/10 bg-black/5 px-4 py-2 backdrop-blur-sm'
      >
        <ul className='flex items-center gap-5'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Projects</a>
          </li>
        </ul>
      </nav>
      <div className='flex items-center gap-3'>
        <a href='https://github.com/barjr'>
          <Image
            src={github}
            className='block w-10 h-10'
            loading='eager'
            alt='Github Link'
          ></Image>
        </a>
        <Link href='/'>
          <ShimmerButton className='h-10'>Contact</ShimmerButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
