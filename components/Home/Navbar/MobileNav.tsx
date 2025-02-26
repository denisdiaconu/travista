import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div>
      <div className={`bg-black ${navOpen} fixed inset-0 z-[1002] transform transition-all duration-500 opacity-70 w-full h-screen`}></div>
      <div
        className={`bg-rose-900 ${navOpen} text-white flex flex-col fixed justify-center w-[80%] sm:w-[60%] h-full transform transition-all
       duration-500 delay-300 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white text-[20px] ml-12 pb-1 w-fit border-b-[1.5px] border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
