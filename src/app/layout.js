import { Roboto } from 'next/font/google';
import './globals.css';
import SiteBackground from './components/SiteBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Focus from './components/Focus';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio',
  description: 'my portfolio',
};

export default function RootLayout() {
  return (
    <html lang='en' className={`${roboto.variable} h-full antialiased`}>
      <body className='relative isolate min-h-full flex flex-col overflow-x-hidden bg-black text-white'>
        <SiteBackground />
        <Navbar />
        <Hero />
        <Focus />
        <Projects />
        <Contact />
        <BackToTop />
      </body>
    </html>
  );
}
