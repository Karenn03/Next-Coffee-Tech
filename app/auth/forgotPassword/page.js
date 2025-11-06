import React from "react";
import Image from "next/image";
import Link from "next/link";

import forms from "@/public/img/forms.jpg";
import logo from "@/public/img/logo.png";
import Navbar from "@/components/Navbar";
import Input from "@/components/Inputs/Input";

const ForgotPassword = () => {
    return (
        <>
            <Navbar />
            <section
                className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center h-screen bg-cover bg-center relative font-montserrat px-4 md:px-24"
                style={{ backgroundImage: `url(${forms.src})` }}
            >
                <div className="absolute inset-0 bg-[#150D0C99] z-10" />
                <div className="bg-[#978F84F2] bg-opacity-95 rounded-3xl p-6 max-w-[360px] w-full shadow-lg text-center text-white z-20 relative md:ml-24 md:mt-0 mt-10">
                    <div className="text-center mb-4">
                        <Image
                            className="mx-auto"
                            src={logo.src}
                            alt="Logo"
                            width={70}
                            height={70}
                        />
                    </div>
                    <h2 className="font-bold text-[#4A362F] text-lg mb-2">
                        ¿Olvidaste tu contraseña?
                    </h2>
                    <p className="font-semibold text-white text-sm mb-4">
                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.
                    </p>
                    <form className="space-y-2">
                        <Input icon="fa-envelope" type="email" placeholder="Correo Electrónico" />
                        <button
                            type="submit"
                            className="w-full py-2 bg-[#4A362F] text-white rounded-xl text-base mt-2 h-10 hover:bg-[#3b2d27] transition"
                        >
                            Restablecer Contraseña
                        </button>
                        <Link
                            href="/auth/signIn"
                            className="w-full flex items-center justify-center font-bold text-[#4A362F] border-2 border-[#4A362F] rounded-xl text-base h-10 mt-1 no-underline hover:bg-[#B5AFA7] transition"
                        >
                            Inicia Sesión
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
