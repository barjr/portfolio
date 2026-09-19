const projects = [
  {
    title: 'ResQ',
    description:
      'ResQ is a smart alert system that lets event attendees request emergency help with one tap. Responders and bystanders receive real-time alerts with geolocation, descriptions, and severity guidance, improving coordination and response times.',
    technologies: ['Dart', 'C++', 'Javascript', 'Flutter'],
    sourceUrl: 'https://github.com/barjr/ResQ',
  },
  {
    title: 'Under Construction',
    description: 'TBD',
    technologies: ['Technology', 'Technology', 'Technology'],
    liveUrl: '#',
    sourceUrl: '#', // Conditional Rendered
  },
];

const Projects = () => {
  return (
    <section
      id='projects'
      className='relative bg-black px-6 py-24 pb-0 text-white lg:px-16'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500'>
              Selected work
            </p>
            <h2 className='text-5xl font-light tracking-tight sm:text-6xl'>
              Projects
            </h2>
          </div>
          <p className='max-w-sm text-zinc-400'>
            A collection of work, experiments, and ideas brought to life.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className='flex min-h-80 flex-col border border-zinc-800 p-6 transition-colors hover:border-zinc-500'
            >
              <div className='mb-10 flex items-center justify-between text-sm text-zinc-500'>
                <span>0{index + 1}</span>
                <span>Project type</span>
              </div>

              <div className='flex flex-1 flex-col'>
                <h3 className='mb-4 text-2xl font-medium'>{project.title}</h3>
                <p className='mb-8 text-zinc-400'>{project.description}</p>

                <div className='mt-auto flex flex-wrap gap-2'>
                  {project.technologies.map((technology, technologyIndex) => (
                    <span
                      key={`${technology}-${technologyIndex}`}
                      className='border border-zinc-700 px-3 py-1 text-xs text-zinc-300'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mt-8 flex gap-5 border-t border-zinc-800 pt-5 text-sm'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className='text-zinc-200 hover:text-white'
                  >
                    Live site <span aria-hidden='true'>↗</span>
                  </a>
                )}
                <a
                  href={project.sourceUrl}
                  className='text-zinc-400 hover:text-white'
                >
                  Source <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
