import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
export default function Home() {
  return (
    <div className='w-full max-w-7xl mx-auto px-6 lg:px-8'>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
