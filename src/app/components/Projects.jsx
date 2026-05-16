'use client';

import { Shader, Blob } from 'shaders/react';

const Projects = () => {
  return (
    <section className='relative overflow-hidden min-h-screen'>
      <Shader className='absolute inset-0 -z-10'>
        <Blob size={0.3} colorA='#3c5ee4' colorB='#3654cd' />
      </Shader>
      <h2 className='relative text-4xl font-bold text-white'>
        Section Heading
      </h2>
      <p className='relative text-white/80 mt-4'>Content above the shader.</p>
    </section>
  );
};

export default Projects;
