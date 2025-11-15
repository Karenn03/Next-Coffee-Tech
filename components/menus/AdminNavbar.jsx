"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.png";
import NotificationButton from "../buttons/NotificationButton";

export default function AdminNavbar() {
  const [state, setState] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 bg-stone-300/90 backdrop-blur-sm w-full md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-10 px-4 max-w-8xl mx-auto md:flex md:px-8 font-montserrat">
          <div className="flex items-center justify-between py-2 md:py-4 md:block">
            <Image src={logo} className="h-12 w-12" alt="Coffee Tech logo" />
            {/* Hamburger menu*/}
            <div className="md:hidden">
              <button
                className="text-[#4A362F] hover:text-[#3B2B26]"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <i className="fa-solid fa-xmark text-2xl" />
                ) : (
                  <i className="fa-solid fa-bars text-2xl" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-1 md:space-y-0">
              <li className="flex-1 items-center justify-end gap-x-4 space-y-3 md:flex md:space-y-0">
                <Link
                  href="#"
                  className="items-center gap-2 p-2 w-fit h-fit font-semibold text-base text-[#4A362F] hover:text-[#1E1613] border rounded-lg md:border-none transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="shadow-sm backdrop-blur transition-all duration-300 rounded-full">
                    <NotificationButton />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="block py-2 px-4 font-semibold text-base text-center text-[#4A362F] hover:text-[#1E1613] border rounded-lg md:border-none transition-all duration-300 shadow-sm backdrop-blur hover:bg-gray-200 hover:-translate-y-1"
                >
                  Mi perfil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}
