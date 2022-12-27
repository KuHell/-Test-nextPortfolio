import React from "react";
import Card from "../components/Card";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { time: new Date().toISOString() },
  };
};

const Home = (time: string) => {
  console.log(">>>>", time);
  return (
    <div>
      <h1>Home</h1>
      <Card time={{ time: time }} />
      {/* <Card Json={{ key1: time }} /> */}
    </div>
  );
};

export default Home;
