import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import ChooseUsCard from './ChooseUsCard';

const ChooseUs = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ChooseUsCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ChooseUsCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
        >
          <ChooseUsCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
