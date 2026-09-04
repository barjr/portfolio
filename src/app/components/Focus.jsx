import { FaBolt, FaCodeBranch, FaLightbulb, FaSitemap } from 'react-icons/fa';

const focusAreas = [
  {
    title: 'Performance Engineering',
    description:
      'Designing responsive, efficient applications with measured performance across the frontend, backend, and delivery pipeline.',
    icon: FaBolt,
  },
  {
    title: 'Scalable Architecture',
    description:
      'Establishing clear boundaries, dependable APIs, and maintainable systems that support long-term product growth.',
    icon: FaSitemap,
  },
  {
    title: 'Product Experiences',
    description:
      'Building accessible interfaces with purposeful motion, intuitive interactions, and feedback that keeps users oriented.',
    icon: FaLightbulb,
  },
  {
    title: 'End-to-End Delivery',
    description:
      'Taking ownership from data modeling and service design through frontend implementation, testing, and refinement.',
    icon: FaCodeBranch,
  },
];

const Focus = () => {
  return (
    <section
      id='focus'
      className='relative z-10 overflow-hidden py-24 sm:py-32 min-h-screen'
    >
      <div className='mx-auto w-full max-w-6xl px-6'>
        <div className='max-w-2xl'>
          <p className='text-sm uppercase tracking-[0.35em] text-white/60'>
            Engineering Focus
          </p>
          <h2 className='mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Building software with lasting value.
          </h2>
          <p className='mt-5 text-base leading-7 text-white/75 sm:text-lg'>
            I combine technical rigor with product thinking to deliver digital
            experiences that are reliable, maintainable, and effective.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
              >
                <div className='absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
                <div className='relative flex h-full flex-col'>
                  <Icon className='text-3xl text-sky-300' aria-hidden='true' />
                  <h3 className='mt-6 text-2xl font-semibold text-white'>
                    {area.title}
                  </h3>
                  <p className='mt-4 text-sm leading-6 text-white/72 sm:text-base'>
                    {area.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Focus;
