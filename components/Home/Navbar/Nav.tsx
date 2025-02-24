import React from 'react';
import { TbAirBalloon } from 'react-icons/tb';

const Nav = () => {
  return (
    <div className="bg-blue-950 h-[12vh] z-[1000] transition-all duration-200">
      <div className='flex items-center justify-between mx-auto h-full w-[90%] xl:w-[80%]'>
        <div className='flex items-center space-x-2'>
            <div className='flex flex-col items-center justify-center bg-rose-500 w-10 h-10 rounded-full'>
                <TbAirBalloon className='w-6 h-6 text-white'/>
            </div>
            <h1 className='text-white text-xl md:text-2xl uppercase font-bold'>Travista</h1>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Nav;
