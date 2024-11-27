"use client";

import React from "react";
import Image from "next/image";

const ProductCard = ({ name, alt, varenr, imgSrc, inputName }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <Image
        src={imgSrc}
        alt={alt}
        width={300}
        height={300}
        className="border border-gray-300 rounded-lg object-cover"
      />
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>Varenr. {varenr}</p>
        <input
          type="number"
          name={inputName}
          placeholder="Antal"
          min="0"
          className="border border-gray-300 rounded w-20 py-1 px-2"
        />
      </div>
    </div>
  );
};

export default ProductCard;
