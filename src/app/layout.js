import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
      <body className='min-h-full flex flex-col'>
        <Navbar />
        <Hero />
      </body>
    </html>
  );
}
