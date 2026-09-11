const About = () => {
  return (
    <section
      id='about'
      className='relative flex min-h-screen items-center bg-black px-6 py-24 text-white lg:px-16'
    >
      <div className='mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
        <div>
          <p className='mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500'>
            About me
          </p>
          <h2 className='max-w-md text-5xl font-light tracking-tight sm:text-6xl'>
            I turn awesome ideas into code.
          </h2>
        </div>

        <div className='space-y-10'>
          <p className='max-w-2xl text-xl leading-relaxed text-zinc-300'>
            I am a full-stack software engineer who enjoys turning ideas into
            working products. I love exploring different kinds of software and
            working across the stack, with a particular interest in TypeScript
            and Python.
          </p>

          <div className='grid gap-8 border-t border-zinc-800 pt-8 sm:grid-cols-3'>
            <div>
              <p className='mb-2 text-sm text-zinc-500'>Focus</p>
              <p className='text-zinc-200'>
                Full-stack development and problem solving
              </p>
            </div>
            <div>
              <p className='mb-2 text-sm text-zinc-500'>Approach</p>
              <p className='text-zinc-200'>
                Detail-oriented and always learning
              </p>
            </div>
            <div>
              <p className='mb-2 text-sm text-zinc-500'>Currently</p>
              <p className='text-zinc-200'>
                Working toward my first role in tech
              </p>
            </div>
          </div>

          <div className='flex flex-wrap gap-3'>
            {['Python', 'Next.js', 'TypeScript', 'Java'].map((skill) => (
              <span
                key={skill}
                className='border border-zinc-700 px-4 py-2 text-sm text-zinc-300'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
