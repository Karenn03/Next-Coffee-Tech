import React from "react";
import Image from "next/image";

const OffersBox = ({ image, title, description }) => {
  return (
    <div className="flex justify-center px-4 lg:px-12 py-5">
      <div className="w-full max-w-5xl bg-[#FFFEFC] border-2 border-[#978F84] rounded-xl p-5 flex flex-col lg:flex-row items-center lg:items-start gap-5 min-h-40 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="shrink-0 flex justify-center lg:justify-start">
          <Image
            src={image}
            alt="Offer"
            className="w-32 h-32 md:w-36 lg:w-38 lg:h-38 object-contain p-2.5"
          />
        </div>
        <div className="text-center lg:text-left lg:flex-1">
          <h3 className="text-[#978F84] text-xl lg:text-2xl mt-2 mb-2 font-fjalla font-semibold">
            {title}
          </h3>
          <p className="text-sm lg:text-base mb-4 font-montserrat text-[#4A362F]">
            {description}
          </p>

          <button className="bg-[#978F84] text-white border-none py-2 px-2 rounded-3xl w-36 font-montserrat font-semibold transition-all duration-300 hover:shadow-lg hover:bg-[#4A362F] hover:-translate-y-1">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersBox;
