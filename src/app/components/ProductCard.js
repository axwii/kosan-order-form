"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ProductCard = ({ name, alt, varenr, imgSrc, inputName, weight, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    onQuantityChange(inputName, weight, quantity);
  }, [quantity, weight]);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 400));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (!isNaN(numericValue)) {
        setQuantity(Math.min(Math.max(numericValue, 0), 400));
      } else {
        setQuantity(0);
      }
    }
  };

  return (
    <div className="flex m-4 p-4 border border-gray-300 rounded-lg bg-white">
      <figure style={{ position: "relative", width: "100px", height: "100px" }}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes="(min-width: 640px) 100px, 50px"
          style={{ objectFit: "cover" }}
          className="border border-gray-300 rounded-lg bg-white"
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