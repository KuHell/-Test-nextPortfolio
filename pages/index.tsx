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
    <div className='text-center'>
      <h1 className='m-20 text-7xl'>
        Freelance product designer, based in Poland
      </h1>
      <Card time={props.time} />
    </div>
  );
};

export default Home;
