const projects = [
  {
    title: 'Interactive Portfolio',
    year: '2026',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque, et sequi optio debitis sapiente at mollitia voluptates alias perspiciatis repudiandae magni quidem neque incidunt, minima sint! Consectetur, laboriosam illo!',
    tags: ['Next.js', 'GSAP', 'shaders/react'],
    accent: 'from-sky-400/25 via-blue-400/10 to-transparent',
  },
  {
    title: 'Design System Refresh',
    year: '2026',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque, et sequi optio debitis sapiente at mollitia voluptates alias perspiciatis repudiandae magni quidem neque incidunt, minima sint! Consectetur, laboriosam illo!',
    tags: ['UI', 'Tailwind', 'Accessibility', 'Docker', 'SQL'],
    accent: 'from-cyan-400/20 via-slate-400/10 to-transparent',
  },
  {
    title: 'Performance Tuning',
    year: '2026',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque, et sequi optio debitis sapiente at mollitia voluptates alias perspiciatis repudiandae magni quidem neque incidunt, minima sint! Consectetur, laboriosam illo!',
    tags: ['Performance', 'App Router', 'Motion'],
    accent: 'from-indigo-400/25 via-violet-400/10 to-transparent',
  },
  {
    title: 'Skill Based Matchmaking',
    year: '2026',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque, et sequi optio debitis sapiente at mollitia voluptates alias perspiciatis repudiandae magni quidem neque incidunt, minima sint! Consectetur, laboriosam illo!',
    tags: ['Performance', 'App Router', 'Motion'],
    accent: 'from-indigo-400/25 via-violet-400/10 to-transparent',
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='relative z-10 overflow-hidden py-24 sm:py-32 min-h-screen'
    >
      <div className='mx-auto w-full max-w-6xl px-6'>
        <div className='max-w-2xl'>
          <p className='text-sm uppercase tracking-[0.35em] text-white/60'>
            Previous Work
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className='relative flex h-full flex-col'>
                <div className='flex items-center justify-between gap-4 text-sm text-white/55'>
                  <span>{project.year}</span>
                  <span className='rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-white/65'>
                    Featured
                  </span>
                </div>

                <h3 className='mt-6 text-2xl font-semibold text-white'>
                  {project.title}
                </h3>
                <p className='mt-4 text-sm leading-6 text-white/72 sm:text-base'>
                  {project.description}
                </p>

                <ul className='mt-6 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className='rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80'
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
