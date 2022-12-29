import React from 'react';
import Card from '../components/Card';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { time: new Date().toISOString() },
  };
};

const Home = (props: { time: string }) => {
  return (
    <div className=''>
      <h1 className='m-20 text-7xl'>
        Freelance product designer, based in Poland
      </h1>
      <div className='grid grid-cols-2 grid-rows-1 gap-y-16 place-items-center'>
        <Card time={props.time} />
        <Card time={props.time} />
        <Card time={props.time} />
        <Card time={props.time} />
      </div>
    </div>
  );
};

export default Home;
