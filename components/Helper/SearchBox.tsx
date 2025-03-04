import React from 'react';
import { FaMap } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div
      className="bg-white items-center justify-center rounded-lg p-8 mt-4
     sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[95%] sm:w-[80%]"
    >
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input
            type="text"
            placeholder="Where are you going?"
            className="placeholder:text-gray-800 outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
