"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.png";

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Menú", path: "/menu" },
    { title: "Mis pedidos", path: "/myOrders" },
    { title: "Carrito", path: "/shoppingCart" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 bg-stone-300/90 backdrop-blur-sm w-full md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-10 px-4 max-w-8xl mx-auto md:flex md:px-8 font-montserrat">
          <div className="flex items-center justify-between py-2 md:py-4 md:block">
            <Link href="/home">
              <Image src={logo} className="h-12 w-12" alt="Coffee Tech logo" />
            </Link>
            {/* Hamburger menu*/}
            <div className="md:hidden">
              <button
                className="text-[#4A362F] hover:text-[#3B2B26]"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <i className="fa-solid fa-xmark text-2xl"></i>
                ) : (
                  <i className="fa-solid fa-bars text-2xl"></i>
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
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {
                      <Link
                        href={item.path}
                        className="block py-2 px-4 font-semibold text-base text-[#4A362F] hover:text-[#1E1613] rounded-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        {item.title}
                      </Link>
                    }
                  </li>
                );
              })}
              <li className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <Link
                  href="/auth/signIn"
                  className="block py-2 px-4 font-semibold text-base text-center text-[#4A362F] hover:text-[#1E1613] border rounded-lg md:border-none transition-all duration-300 hover:-translate-y-1"
                >
                  Inicia sesión
                </Link>
                <Link
                  href="/auth/signUp"
                  className="block py-2 px-4 font-semibold text-base text-center text-white bg-[#725348] active:bg-[#5E443C] active:shadow-none rounded-lg shadow md:inline transition-all duration-300 hover:shadow-lg hover:bg-[#856155] hover:-translate-y-1"
                >
                  Regístrate
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
