import React from 'react';

const Footer = () => {
  return <div className='pt-16 pb-16'>
    <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer'>About Us</p>
            <p className='text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer'>Careers</p>
            <p className='text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer'>Blogs</p>
            <p className='text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer'>Gift Cards</p>
            <p className='text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer'>Magazine</p>
        </div>
    </div>
  </div>;
};

export default Footer;
