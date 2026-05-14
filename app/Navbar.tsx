import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
      <header>
        <div className='nav-left'>
          <h1>brian.</h1>
        </div>
        <div className='nav-center'>
          <ul className='list'>
            <li>
              <Link href={'/'}>home</Link>
            </li>
            <li>
              <Link href={'/'}>skills</Link>
            </li>
            <li>
              <Link href={'/'}>projects</Link>
            </li>
            <li>
              <Link href={'/'}>contact</Link>
            </li>
          </ul>
        </div>
        <div className='nav-right button-list'>
          <button>github</button>
          <button>linkedIn</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
