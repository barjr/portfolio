'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shader, Plasma } from 'shaders/react';

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
    <section className='relative w-full min-h-screen overflow-hidden bg-black'>
      <div ref={shaderRef} className='absolute inset-0'>
        <Shader className='absolute inset-0'>
          <Plasma intensity={1.5} speed={3} density={1} colorA='#3c5ee4' />
        </Shader>
      </div>
    </section>
  );
};

export default Hero;
