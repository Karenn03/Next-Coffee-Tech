"use client";

import React, { useState } from "react";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
      <i className="fa-solid fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4A362F] text-lg"></i>
      <input
        type={isPasswordHidden ? "password" : "text"}
        placeholder={placeholder}
        className="w-full pl-12 pr-10 py-2 text-[#7A6F69] bg-[#D9D9DB] outline-none h-12 border focus:border-[#4A362F] rounded-xl text-sm sm:text-base"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4A362F] focus:outline-none"
        onClick={() => setPasswordHidden(!isPasswordHidden)}
      >
        {isPasswordHidden ? (
          <i className="fa-solid fa-eye-slash text-lg"></i>
        ) : (
          <i className="fa-solid fa-eye text-lg"></i>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
