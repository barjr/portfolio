'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shader, Plasma } from 'shaders/react';

const SiteBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const element = backgroundRef.current;

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
    <div
      ref={backgroundRef}
      className='fixed inset-0 -z-10 pointer-events-none'
    >
      <Shader className='absolute inset-0'>
        <Plasma intensity={1.5} speed={3} density={1} colorA='#3c5ee4' />
      </Shader>
    </div>
  );
};

export default SiteBackground;
