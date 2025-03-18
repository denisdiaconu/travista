import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';

const Newsletter = () => {
  return (
    <div className="bg-black flex items-center justify-center flex-col w-full pt-16 pb-16">
      <BsEnvelopePaper className="text-white w-16 h-16 mt-20" />
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="text-white mt-3 text-xs sm:text-sm">
        Sign up to receive the best deals straight to your inbox!
      </p>
      <div className="w-full">
        <input
          type="text"
          placeholder="Email"
          className="bg-white px-6 py-3.5 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
        />
        <button className="bg-blue-900 hover:bg-blue-950 text-white transition-all duration-200 px-6 py-3.5 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
