import { FlickeringGrid } from '@/components/ui/flickering-grid';
const Hero = () => {
  return (
    <>
      <div className='relative left-1/2 w-screen -translate-x-1/2 bg-black h-screen overflow-hidden z-[-1]'>
        <FlickeringGrid color='white' maxOpacity={0.07} />
      </div>
    </>
  );
};

export default Hero;
