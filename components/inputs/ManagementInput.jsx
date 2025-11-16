import React from "react";

const ManagementInput = ({ type, label, placeholder, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-[#69696E]">{label}</label>
      )}
      <input
        type={type}
        label={label}
        placeholder={placeholder}
        className={`w-full border border-[#D9D9DB] rounded-md px-3 py-2 placeholder-[#D9D9DB] focus:outline-none focus:border-2 focus:border-[#D9D9DB]"
        ${type === "datetime-local" ? "input-datetime" : ""}
      `}
        {...props}
      />
    </div>
  );
};

export default ManagementInput;
