"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductBox = ({
  title,
  imageSrc,
  imageAlt,
  onAddToCart,
  price,
  detailsLink,
}) => {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] w-full max-w-[260px] mx-auto">
      <h2 className="font-fjalla text-lg mb-3 text-[#3D2A24] text-center">
        {title}
      </h2>
      <div className="flex justify-center mb-4">
        <Image
          className="h-24 w-auto object-contain mb-2.5 select-none"
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
        />
      </div>
      <div className="font-montserrat flex justify-center gap-3 mt-3">
        <button
          className="border-2 border-[#4A362F] text-[#4A362F] text-lg w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#4A362F] hover:text-white hover:scale-110"
          onClick={() => onAddToCart({ title, image: imageSrc, price })}
        >
          <i className="fa fa-shopping-cart" />
        </button>
        <Link
          href={detailsLink}
          className=" border-2 border-[#4A362F] text-[#4A362F] text-sm w-28 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#4A362F] hover:text-white hover:scale-105"
        >
          Detalles
        </Link>
        <button className="border-2 border-[#4A362F] text-[#4A362F] text-lg w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#4A362F] hover:text-white hover:scale-110">
          <i className="fa fa-heart" />
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
