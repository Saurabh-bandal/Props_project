import React from 'react';
import Herosection from '../src/Components/Herosection';

const Product = () => {
  const data = [
    {
      title: "Delicious & Affordable11",
      title2: "Meals Near You.",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      btn:"Orderd Now"
    },
    {
      title: "We've been serving for over 5 years.",
      title2: "",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      para1:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      btn:"Latest Offers"
    }
  ];

  return (
    <div>
      {/* Normal layout */}
      <Herosection title={data[0].title} title2={data[0].title2} para={data[0].para} btn={data[0].btn} />
      {/* Reverse layout for the second section */}
      <Herosection title={data[1].title} title2={data[1].title2} para={data[1].para} para1={data[1].para1}  btn={data[1].btn} reverse />
    </div>
  );
};

export default Product;
