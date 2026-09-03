'use client';

import {
  FaClock,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRocket,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative z-10 overflow-hidden py-24 sm:py-32 min-h-screen flex items-center'
    >
      <div className='mx-auto w-full max-w-4xl px-6'>
        <div className='text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-white/60'>
            Get In Touch
          </p>
          <h2 className='mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Let&apos;s build something great together.
          </h2>
          <p className='mt-5 text-base leading-7 text-white/75 sm:text-lg max-w-2xl mx-auto'>
            Whether you have a project in mind, want to discuss opportunities,
            or just want to connect, I&apos;d love to hear from you.
          </p>
        </div>

        <div className='mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center'>
          <a
            href='mailto:barjrwork@gmail.com'
            className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 px-8 py-4 font-medium text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
          >
            <span className='absolute inset-0 bg-linear-to-br from-white/20 via-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <span className='relative z-10 flex items-center gap-2'>
              <FaEnvelope aria-hidden='true' />
              Send an Email
            </span>
          </a>
          <a
            href='https://linkedin.com/in/barjr'
            className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 px-8 py-4 font-medium text-white/90 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10'
          >
            <span className='absolute inset-0 bg-linear-to-br from-sky-400/20 via-blue-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <span className='relative z-10 flex items-center gap-2'>
              <FaLinkedin aria-hidden='true' />
              LinkedIn
            </span>
          </a>
        </div>

        <div className='mt-16 grid gap-6 md:grid-cols-3'>
          <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 text-center'>
            <div className='absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <div className='relative z-10'>
              <FaMapMarkerAlt
                className='mx-auto mb-3 text-3xl text-sky-300'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold text-white'>Location</h3>
              <p className='mt-2 text-sm text-white/60'>
                Available for remote and local opportunities
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 text-center'>
            <div className='absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <div className='relative z-10'>
              <FaClock
                className='mx-auto mb-3 text-3xl text-sky-300'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold text-white'>
                Response Time
              </h3>
              <p className='mt-2 text-sm text-white/60'>
                Typically respond within 24-48 hours
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 text-center'>
            <div className='absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <div className='relative z-10'>
              <FaRocket
                className='mx-auto mb-3 text-3xl text-sky-300'
                aria-hidden='true'
              />
              <h3 className='text-lg font-semibold text-white'>Availability</h3>
              <p className='mt-2 text-sm text-white/60'>
                Open to new projects and opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
