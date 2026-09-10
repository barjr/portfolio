import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
export default function Home() {
  return (
    <div className='w-full max-w-7xl mx-auto px-6 lg:px-8'>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
