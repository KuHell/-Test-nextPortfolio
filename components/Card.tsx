import React from 'react';
import { CardProps } from '../types/index';
import Link from 'next/link';

const Card = ({ time }: CardProps) => {
  console.log('time:: ', time);
  return (
    <>
      <div className='min-w-[43rem] bg-white rounded-md min-h-[35rem]'>
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
