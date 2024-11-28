"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductCard = ({ name, alt, varenr, imgSrc, inputName }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 100));
  };

  return (
    <div>
      <figure style={{ position: "relative", width: "300px", height: "300px" }}>
        <Image
          src={imgSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="border border-gray-300 rounded-lg"
        />
      </figure>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>Varenr. {varenr}</p>
        <div className="flex">
          <span className="input-number-decrement" onClick={handleDecrement}>–</span>
          <input
            className="input-number"
            type="text"
            name={inputName}
            value={quantity}
            readOnly
          />
          <span className="input-number-increment" onClick={handleIncrement}>+</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;