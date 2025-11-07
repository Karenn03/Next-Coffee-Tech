"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const MyOrders = () => {
    const [activeButton, setActiveButton] = useState("Todos");
    const tabRefs = useRef({});
    const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 });
    const tabs = ["Todos", "Preparando", "Enviado", "Para recoger", "Entregado"];
    useEffect(() => {
        const el = tabRefs.current[activeButton];
        if (el) {
            setUnderlineProps({
                width: el.offsetWidth,
                left: el.offsetLeft
            });
        }
    }, [activeButton]);
    const buttonClasses = (name) =>
        `px-3 py-2 transition font-semibold relative z-10
         ${activeButton === name
            ? "text-[#4C4740] font-bold"
            : "text-[#8A8175] hover:text-[#4C4740]"
        }`;
    const renderOrderHistory = () => {
        switch (activeButton) {
            case "Preparando":
                return (
                    <div className="text-center flex flex-col items-center justify-center p-5 h-full w-full">
                        <p className="text-[#978F84] text-lg font-semibold my-2">
                            Pedido en preparación...
                        </p>
                    </div>
                );
            case "Enviado":
                return (
                    <div className="text-center flex flex-col items-center justify-center p-5 h-full w-full">
                        <p className="text-[#978F84] text-lg font-semibold my-2">
                            Tu pedido ha sido enviado.
                        </p>
                    </div>
                );
            case "Para recoger":
                return (
                    <div className="text-center flex flex-col items-center justify-center p-5 h-full w-full">
                        <p className="text-[#978F84] text-lg font-semibold my-2">
                            Tu pedido está listo para recoger.
                        </p>
                    </div>
                );
            case "Entregado":
                return (
                    <div className="text-center flex flex-col items-center justify-center p-5 h-full w-full">
                        <p className="text-[#978F84] text-lg font-semibold my-2">
                            Tu pedido ha sido entregado.
                        </p>
                    </div>
                );
            default:
                return (
                    <div className="text-center flex flex-col items-center justify-center p-5 h-full w-full">
                        <i className="fas fa-shopping-bag text-[130px] sm:text-[170px] text-[#978F84] mb-5"></i>
                        <p className="font-fjalla text-[#4A362F] text-xl sm:text-2xl font-bold my-1.5">
                            ¡Haz tu primera compra!
                        </p>
                        <p className="font-fjalla text-[#978F84] text-base sm:text-lg font-medium my-1.5">
                            Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.
                        </p>
                        <Link
                            href="/menu"
                            className="bg-[#4A362F] text-white px-7 py-2.5 mt-5 rounded-lg text-sm sm:text-base hover:bg-[#2D211C] transition"
                        >
                            Compra ahora
                        </Link>
                    </div>
                );
        }
    };
    return (
        <>
            <Navbar />
            <div className="font-montserrat bg-[#E1DFDC] rounded-2xl mt-28 mb-5 shadow-md w-[90%] mx-auto px-7 py-7">
                <div className="relative flex flex-wrap gap-4 mb-3.5 pb-2">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            ref={(el) => (tabRefs.current[tab] = el)}
                            onClick={() => setActiveButton(tab)}
                            className={buttonClasses(tab)}
                            whileHover={{ x: 3 }}
                            whileTap={{ scale: 0.93 }}
                            transition={{ type: "spring", stiffness: 180, damping: 14 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                    <motion.div
                        className="absolute bottom-0 h-[2.5px] bg-[#4C4740] rounded-full"
                        animate={{
                            width: underlineProps.width,
                            left: underlineProps.left
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 26
                        }}
                    />
                </div>
                <div className="relative w-full">
                    <input
                        className="w-full h-10 rounded-[20px] bg-[#F2F2F3] border border-[#7A7267] pl-4 pr-12 text-sm sm:text-base"
                        type="search"
                        placeholder="Nombre del producto / ID del pedido"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7267]">
                        <i className="fa-solid fa-magnifying-glass text-[15px]" />
                    </span>
                </div>
            </div>
            <main className="p-5 sm:p-8 bg-[#E1DFDC] rounded-[15px] shadow-md w-[90%] mx-auto min-h-[450px] sm:h-[550px]">
                {renderOrderHistory()}
            </main>
        </>
    );
};

export default MyOrders;
