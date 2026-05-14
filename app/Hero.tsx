'use client';

import React, { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';

const config = {
  colors: [
    {
      color: '#000000',
      enabled: true,
    },
    {
      color: '#001129',
      enabled: true,
    },
    {
      color: '#0F0025',
      enabled: true,
    },
    {
      color: '#14080A',
      enabled: true,
    },
    {
      color: '#001129',
      enabled: true,
    },
  ],
  speed: 2,
  horizontalPressure: 4,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 2,
  waveAmplitude: 1,
  shadows: 2,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: -1,
  wireframe: false,
  colorBlending: 7,
  backgroundColor: '#010101',
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 1,
  resolution: 0.75,
  yOffset: 0,
  yOffsetWaveMultiplier: 2.2,
  yOffsetColorMultiplier: 2.5,
  yOffsetFlowMultiplier: 2.8,
  flowDistortionA: 1.2,
  flowDistortionB: 2.4,
  flowScale: 1.5,
  flowEase: 0.41,
  flowEnabled: false,
  enableProceduralTexture: false,
  textureVoidLikelihood: 0.06,
  textureVoidWidthMin: 10,
  textureVoidWidthMax: 500,
  textureBandDensity: 0.8,
  textureColorBlending: 0.06,
  textureSeed: 333,
  textureEase: 0.68,
  proceduralBackgroundColor: '#FFED00',
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0,
  domainWarpScale: 3,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: false,
  fresnelPower: 2,
  fresnelIntensity: 0.5,
  fresnelColor: '#FFFFFF',
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.7,
  chromaticAberration: 0,
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const gradient = new NeatGradient({
      ref: canvas,
      ...config,
    });

    const neatLink = canvas.parentElement?.querySelector('a[data-n]');

    if (neatLink) {
      neatLink.remove();
    }

    const handleScroll = () => {
      gradient.yOffset = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} id='gradient' className='hero-canvas' />;
};

export default Hero;
