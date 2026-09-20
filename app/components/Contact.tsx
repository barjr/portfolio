const Contact = () => {
  return (
    <section
      id='contact'
      className='relative min-h-[75vh] bg-black px-6 py-24 text-white lg:px-16 pt-20'
    >
      <div className='mx-auto grid w-full max-w-6xl gap-16 border-t border-zinc-800 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24'>
        <div>
          <p className='mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500'>
            Get in touch
          </p>
          <h2 className='max-w-md text-5xl font-light tracking-tight sm:text-6xl'>
            Let&apos;s build something useful.
          </h2>
        </div>

        <div className='flex flex-col justify-between gap-12'>
          <div>
            <p className='max-w-xl text-xl leading-relaxed text-zinc-300'>
              Have an idea, a problem to solve, or an opportunity to discuss?
              I&apos;d love to hear from you.
            </p>
            <a
              href='mailto:barjrwork@gmail.com'
              className='mt-8 inline-block border-b border-zinc-500 pb-2 text-2xl text-white transition-colors hover:border-white hover:text-zinc-300 sm:text-3xl'
            >
              barjrwork@gmail.com <span aria-hidden='true'>↗</span>
            </a>
          </div>

          <div className='flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-800 pt-6 text-sm'>
            <a
              href='https://github.com/barjr'
              className='text-zinc-400 transition-colors hover:text-white'
            >
              GitHub <span aria-hidden='true'>↗</span>
            </a>
            <a
              href='https://www.linkedin.com/in/barjr/'
              className='text-zinc-400 transition-colors hover:text-white'
            >
              LinkedIn <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
