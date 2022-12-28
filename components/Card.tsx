import React from 'react';
import { CardProps } from '../types/index';

const Card = ({ time }: CardProps) => {
  console.log('time:: ', time);
  return (
    <>
      <h1>Card</h1>
      <div>time: {time}</div>
    </>
  );
};

export default Card;
