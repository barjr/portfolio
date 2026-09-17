import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/next';
export default function Home() {
  return (
    <div className='w-full max-w-7xl mx-auto px-6 lg:px-8'>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
