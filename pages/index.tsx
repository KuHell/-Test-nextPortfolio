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
    <div>
      <Card time={props.time} />
    </div>
  );
};

export default Home;
