import { Roboto } from 'next/font/google';
import './globals.css';
import SiteBackground from './components/SiteBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

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
        <Projects />
      </body>
    </html>
  );
}
