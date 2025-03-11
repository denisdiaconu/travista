import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className="relative w-full h-[300px] rounded-lg cursor-pointer group overflow-hidden">
        <div className="bg-white text-black absolute w-8 h-8 top-4 right-4 z-20 rounded-full flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3" />
        </div>
        <div className="bg-black absolute inset-0 opacity-20 z-10"></div>
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default HotelCard;
