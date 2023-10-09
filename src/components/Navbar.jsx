import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const listStyle = 'p-4 hover:text-blue-500 hover:underline cursor-pointer';

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.School</h1>
      <ul className='hidden md:flex'>
        <li className={listStyle}>Home</li>
        <li className={listStyle}>Company</li>
        <li className={listStyle}>Resources</li>
        <li className={listStyle}>About</li>
        <li className={listStyle}>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.School</h1>
          <li className='p-4 border-b border-gray-300'>Home</li>
          <li className='p-4 border-b border-gray-300'>Company</li>
          <li className='p-4 border-b border-gray-300'>Resources</li>
          <li className='p-4 border-b border-gray-300'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;