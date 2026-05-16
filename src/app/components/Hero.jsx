'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shader, Plasma } from 'shaders/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const shaderRef = useRef(null);

  useEffect(() => {
    const element = shaderRef.current;

    if (!element) return;

    gsap.set(element, { autoAlpha: 0 });

    const animation = gsap.to(element, {
      autoAlpha: 1,
      duration: 1.5,
      delay: 0.75,
      ease: 'power2.out',
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className='relative w-full min-h-screen overflow-hidden bg-black z-10'>
      <div ref={shaderRef} className='absolute inset-0'>
        <Shader className='absolute inset-0'>
          <Plasma intensity={1.5} speed={3} density={1} colorA='#3c5ee4' />
        </Shader>
      </div>
      <div className='relative z-10 flex min-h-screen items-center'>
        <div className='mx-auto w-full max-w-4xl px-6 py-24 text-left md:text-center'>
          <h1 className='text-5xl md:text-7xl font-extrabold'>
            Hey i&apos;m Brian.
          </h1>
          <p className='mt-4 text-lg md:text-2xl text-gray-200/90'>
            I build elegant front-end experiences and interactive visuals.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
            <a
              href='#projects'
              className='px-6 py-3 bg-white/20 backdrop-blur-2xl text-black rounded-lg font-medium'
            >
              View Projects
            </a>
            <a
              href='/resume.pdf'
              className='px-6 py-3 border border-white/30 rounded-lg text-white/90'
            >
              Download Resume
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
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80'>
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
