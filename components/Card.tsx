import React from 'react';
import { CardProps } from '../types/index';
import Link from 'next/link';

const Card = ({ time }: CardProps) => {
  console.log('time:: ', time);
  return (
    <>
      <div className='max-w-xl bg-white rounded-md max-h-2xl'>
        <Link href='#'>
          <img></img>
          <p>Project Name</p>
          <p>Datte</p>
        </Link>
      </div>
    </>
  );
};

export default Card;
