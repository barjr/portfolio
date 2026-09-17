import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/anakin.jpg';
import github from '../public/github.png';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const Header = () => {
  return (
    <header className='fixed inset-x-4 top-4 z-20 mx-auto grid w-auto max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:top-5 sm:gap-4'>
      <div className='logo'>
        <Link href='#logo'>
          <Image
            src={logo}
            loading='eager'
            className='block h-12 w-12 sm:h-15 sm:w-15'
            alt='Logo'
          ></Image>
        </Link>
      </div>

      <nav
        aria-label='Main Navigation'
        className='rounded-full border border-white/10 bg-black/5 px-2 py-1 backdrop-blur-sm sm:px-4 sm:py-2'
      >
        <ul className='flex items-center gap-3 sm:gap-5'>
          <li>
            <a
              className='text-xs text-zinc-500 transition-all hover:text-white sm:text-base'
              href='#about'
            >
              About
            </a>
          </li>
          <li>
            <a
              className='text-xs text-zinc-500 transition-all hover:text-white sm:text-base'
              href='#projects'
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <div className='flex items-center justify-self-end gap-2 sm:gap-3'>
        <a href='https://github.com/barjr'>
          <Image
            src={github}
            className='block h-8 w-8 sm:h-10 sm:w-10'
            loading='eager'
            alt='Github Link'
          ></Image>
        </a>
        <Link href='#contact'>
          <ShimmerButton className='h-9 px-3 py-2 text-sm sm:h-10 sm:px-6 sm:py-3'>
            Contact
          </ShimmerButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
