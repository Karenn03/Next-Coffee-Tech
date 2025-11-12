import React from "react";

const Input = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
      <i
        className={`fa ${icon} absolute top-1/2 left-4 transform -translate-y-1/2 text-[#4A362F] text-lg sm:text-xl`}
      />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-3 py-2 text-[#7A6F69] bg-[#D9D9DB] outline-none h-12 border focus:border-[#4A362F] rounded-xl text-sm sm:text-base"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
