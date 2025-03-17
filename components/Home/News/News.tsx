import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div></div>
      </div>
    </div>
  );
};

export default News;
