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
    </div>
  );
};

export default Hero;
