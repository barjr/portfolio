import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { KineticText } from '@/components/ui/kinetic-text';
const Hero = () => {
  return (
    <>
      <div className='relative left-1/2 flex h-screen w-screen -translate-x-1/2 items-center justify-center overflow-hidden bg-black'>
        <div className='absolute inset-0'>
          <FlickeringGrid color='white' maxOpacity={0.07} />
        </div>
        <div className='relative z-10'>
          <KineticText text='Brian' className='text-9xl' />
        </div>
      </div>
    </>
  );
};

export default Hero;
