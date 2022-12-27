import React, { useState } from "react";

interface CartProps {
  time: String;
}

const Card = ({ time }: CartProps) => {
  console.log("time: ", time.time);
  return (
    <>
      <h1>Card</h1>
      <div>time: {time.time}</div>
    </>
  );
};

export default Card;