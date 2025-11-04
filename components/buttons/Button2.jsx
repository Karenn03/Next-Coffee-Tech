import React from "react";

const Button2 = ({ option }) => {
  return (
    <button className="bg-[#4A362F] text-white border-none py-2.5 px-5 cursor-pointer rounded-3xl my-0 mx-1.5 hover:bg-[#B7AE8F]">
      {option}
    </button>
  );
};

export default Button2;
