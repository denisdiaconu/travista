import React from 'react';

const Review = () => {
  return (
    <div className="bg-[#13357b] flex items-center justify-center flex-col pt-20 pb-20">
      <div className="w-[80%] mx-auto grid items-center gap-10 grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            what our customers are saying us?
          </h1>
          <p className='text-gray-200 mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem atque voluptatibus optio, exercitationem iure enim!</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
