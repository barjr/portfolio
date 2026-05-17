const projects = [
  {
    title: 'Interactive Portfolio',
    year: '2026',
    description:
      'A shader-driven portfolio that blends motion, depth, and clean content layout into a single fast page.',
    tags: ['Next.js', 'GSAP', 'shaders/react'],
    accent: 'from-sky-400/25 via-blue-400/10 to-transparent',
  },
  {
    title: 'Design System Refresh',
    year: '2026',
    description:
      'A visual refresh focused on clearer hierarchy, reusable UI blocks, and stronger contrast across sections.',
    tags: ['UI', 'Tailwind', 'Accessibility'],
    accent: 'from-cyan-400/20 via-slate-400/10 to-transparent',
  },
  {
    title: 'Performance Tuning',
    year: '2026',
    description:
      'A refactor pass that keeps the experience lightweight while preserving the animated background effect.',
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
            Selected Work
          </p>
          <h2 className='mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Projects built to feel polished, fast, and deliberate.
          </h2>
          <p className='mt-5 text-base leading-7 text-white/75 sm:text-lg'>
            This section is set up to showcase a few featured pieces with enough
            breathing room to tell the story behind each one.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
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
