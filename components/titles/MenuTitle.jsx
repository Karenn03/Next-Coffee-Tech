import React from "react";
import Header from "../../assets/img/header.webp";

const TitleMenu = ({ title }) => {
  return (
    <>
      <header
        className="font-fjalla bg-cover h-[510px] flex justify-center items-center text-white text-3xl bg-center text-center py-24"
        style={{ backgroundImage: `url(${Header})` }}
      >
        <h1 className="font-fjalla text-[#D9D9DB] text-5xl m-0">{title}</h1>
      </header>
      <br />
    </>
  );
};

export default TitleMenu;
