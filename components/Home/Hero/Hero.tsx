import SearchBox from '@/components/Helper/SearchBox';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-full h-[120vh] sm:h-[100vh]">
      <div className="bg-gray-800 absolute top-0 left-0 w-full h-full opacity-70"></div>
      <video
        src="/images/hero1.mp4"
        muted
        loop
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div>
            <h1 className="text-white text-[25px] text-center md:text-[35px] lg:text-[45px] mb-4 md:mb-0 tracking-[0.7rem] font-bold uppercase">
              Lets Enjoy The Nature
            </h1>
            <p className='text-white md:text-base text-center text-lg font-normal [word-spacing:3px]'>Get the best prices on 2,000,000+ properties, worldwide</p>
          </div>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
