import React from 'react';
import { CardProps } from '../types/index';
import Link from 'next/link';

const Card = ({ time }: CardProps) => {
  return (
    <>
      <div className='max-w-[40rem] max-h-[35rem]'>
        <Link href='#'>
          <div className='max-h-[450px] overflow-hidden '>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Seoul_Tower_%284394893276%29.jpg'
              alt='project_img'
            />
          </div>
          <div>
            <h1 className='my-4 text-2xl font-bold'>Project Name</h1>
            <p className='text-xl'>Dec 30, 2022</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
