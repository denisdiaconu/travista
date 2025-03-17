import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  date: string;
  title: string;
};

const NewsCard = ({ image, date, title }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-gray-950 hover:text-blue-950 transition-all duration-200 cursor-pointer mt-6 text-lg font-semibold">
        {title}
      </h1>
      <p className="text-gray-600 mt-3 text-sm">{date}</p>
    </div>
  );
};

export default NewsCard;
