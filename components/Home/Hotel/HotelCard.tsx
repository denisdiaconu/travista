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
      <div>
        <h1 className="text-blue-950 mt-4 text-lg font-semibold hover:text-black cursor-pointer transition-all duration-200">
          {hotel.name}
        </h1>
        <p className="text-gray-600 text-sm mt-3 mb-6 font-medium">
          {hotel.location}
        </p>
        <div className="flex items-center space-x-2">
          <div className="bg-blue-800 text-white text-xs px-2 py-2 rounded-md font-bold">
            {hotel.rating}
          </div>
          <p className="text-gray-800 text-sm">Exceptional</p>
          <p className="text-gray-800 text-sm font-bold">
            {hotel.reviews} Reviews
          </p>
        </div>
        <p className="text-gray-700 mt-3 font-medium">
          Starting from{' '}
          <span className="text-blue-600 font-bold">{hotel.price} €</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
