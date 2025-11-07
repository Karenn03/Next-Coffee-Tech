import React from "react";
import Header from "@/public/img/header.webp";

const TitleMenu = ({ title }) => {
  return (
    <>
      <header
        className="bg-cover h-[490px] flex justify-center items-center bg-center py-24 mb-5"
        style={{ backgroundImage: `url(${Header.src})` }}
      >
        <h1 className="font-fjalla text-[#D9D9DB] text-6xl text-center m-0">
          {title}
        </h1>
      </header>
    </>
  );
};

export default TitleMenu;
