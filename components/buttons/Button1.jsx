import React from "react";

const Button1 = ({ option }) => {
  return (
    <button className="bg-[#4A362F] mt-6 text-white border-none pt-2.5 pb-2.5 cursor-pointer rounded-3xl w-48 text-base font-montserrat font-semibold transition-all duration-300 hover:shadow-lg hover:bg-[#B7AE8F] hover:-translate-y-1 hover:scale-105">
      {option}
    </button>
  );
};

export default Button1;
