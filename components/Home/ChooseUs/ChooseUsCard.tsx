import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
};

const ChooseUsCard = ({ image, title }: Props) => {
  return <div>
    <Image src={image} width={70} height={70} alt='image' className='mx-auto'/>
  </div>;
};

export default ChooseUsCard;
