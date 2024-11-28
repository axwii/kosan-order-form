"use client";

import React from "react";
import Image from "next/image";

const ProductCard = ({ name, alt, varenr, imgSrc, inputName }) => {
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
