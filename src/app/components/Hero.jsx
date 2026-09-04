'use client';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollCue(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative z-10 w-full min-h-screen overflow-hidden bg-transparent'>
      <div className='relative z-10 flex min-h-screen items-center'>
        <div className='mx-auto w-full max-w-4xl px-6 py-24 text-left md:text-center'>
          <h1 className='text-5xl md:text-7xl font-extrabold'>
            Brian
          </h1>
          <p className='mt-4 text-lg md:text-2xl text-gray-200/90'>
            I&apos;m a full stack engineer building elegant products and
            interactive visuals.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
            <a
              href='#projects'
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 px-6 py-3 font-medium text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
            >
              <span className='absolute inset-0 bg-linear-to-br from-white/20 via-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
              <span className='relative z-10'>View Projects</span>
            </a>
            <a
              href='/resume.pdf'
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 px-6 py-3 font-medium text-white/90 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
            >
              <span className='absolute inset-0 bg-linear-to-br from-sky-400/20 via-blue-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
              <span className='relative z-10'>Download Resume</span>
            </a>
          </div>
          <div className='mt-6 flex gap-4 justify-start md:justify-center'>
            <a
              href='https://github.com/barjr'
              aria-label='GitHub'
              className='text-white/90'
            >
              <FaGithub />
            </a>
            <a
              href='https://linkedin.com/in/you'
              aria-label='LinkedIn'
              className='text-white/90'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 transition-opacity duration-300 ${showScrollCue ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden={!showScrollCue}
        >
          <div className='flex flex-col items-center'>
            <span className='mb-1 text-sm'>Scroll</span>
            <svg
              className='h-6 w-6 animate-bounce'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                d='M6 9l6 6 6-6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
