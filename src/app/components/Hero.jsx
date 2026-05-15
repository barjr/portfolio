'use client';
import { Shader, Plasma } from 'shaders/react';

const Hero = () => {
  return (
    <Shader>
      <Plasma intensity={1.5} speed={3} density={1} colorA='#3c5ee4' />
    </Shader>
  );
};

export default Hero;
