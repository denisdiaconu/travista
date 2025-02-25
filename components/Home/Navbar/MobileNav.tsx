import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';

const MobileNav = () => {
  return (
    <div>
      <div className="bg-black fixed inset-0 z-[1002] transform transition-all duration-500 opacity-70 w-full h-screen"></div>
      <div
        className="bg-rose-900 text-white flex flex-col fixed justify-center w-[80%] sm:w-[60%] h-full transform transition-all
       duration-500 delay-300 space-y-6 z-[1050]"
      >
        {navLinks.map((link) => {
          return <Link key={link.id} href={link.url}><p className='text-white text-[20px] ml-12 pb-1 w-fit border-b-[1.5px] border-white sm:text-[30px]'>{link.label}</p></Link>
        })}
      </div>
    </div>
  );
};

export default MobileNav;
