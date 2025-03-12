import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
};

const ChooseUsCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      <h1 className="text-gray-900 font-medium mt-6 text-center text-lg">
        {title}
      </h1>
      <p className="text-gray-700 mt-2 text-center text-xs font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, obcaecati!
      </p>
    </div>
  );
};

export default ChooseUsCard;
