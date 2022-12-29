import React from 'react';
import { CardProps } from '../types/index';
import Link from 'next/link';

const Card = ({ time }: CardProps) => {
  return (
    <>
      <div className='min-w-[43rem] bg-white rounded-md min-h-[35rem]'>
        <Link href='#'>
          <div className='max-h-[70%]'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg'
              alt='project_img'
            />
          </div>
          <div>
            <h1 className='text-black'>Project Name</h1>
            <p className='text-black'>Datte</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
