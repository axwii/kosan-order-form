"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductCard = ({ name, alt, varenr, imgSrc, inputName }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 200));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (!isNaN(numericValue)) {
        setQuantity(Math.min(Math.max(numericValue, 0), 200));
      } else {
        setQuantity(0);
      }
    }
  };

  return (
    <div className="flex m-4 p-4 border border-gray-300 rounded-lg">
      <figure style={{ position: "relative", width: "100px", height: "100px" }}>
        <Image
          src={imgSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="border border-gray-300 rounded-lg"
        />
      </figure>
      <div className="flex flex-col justify-between flex-grow ml-4">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>Varenr. {varenr}</p>
        </div>
        <div className="flex justify-end">
          <span className="input-number-decrement" onClick={handleDecrement}>–</span>
          <input
            className="input-number"
            type="text"
            name={inputName}
            value={quantity}
            onChange={handleInputChange}
          />
          <span className="input-number-increment" onClick={handleIncrement}>+</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
