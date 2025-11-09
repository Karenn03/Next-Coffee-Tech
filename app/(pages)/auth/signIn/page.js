import React from "react";
import Image from "next/image";
import Link from "next/link";

import Input from "@/components/Inputs/Input";
import PasswordInput from "@/components/Inputs/PasswordInput";
import logo from "@/public/img/logo.png";
import forms from "@/public/img/forms.jpg";

const Login = () => {
    return (
        <section
            className="flex justify-center md:justify-start items-center h-screen bg-cover bg-center relative font-montserrat px-4 md:px-16"
            style={{ backgroundImage: `url(${forms.src})` }}
        >
            <div className="absolute inset-0 bg-[#150D0C99] z-10" />
            <div className="bg-[#978F84F2] bg-opacity-95 rounded-3xl p-6 max-w-[360px] w-full shadow-lg text-center text-white z-20 relative md:ml-20">
                <div className="text-center mb-4">
                    <Image className="mx-auto" src={logo.src} alt="Logo" width={70} height={70} />
                </div>

                <h2 className="font-bold text-[#4A362F] text-base mb-5">
                    ¿No tienes una cuenta?
                    <Link href="/auth/signUp" className="text-white ml-1.5">
                        Regístrate
                    </Link>
                </h2>

                <form className="space-y-4">
                    <Input
                        icon="fa-envelope"
                        type="email"
                        placeholder="Correo Electrónico"
                    />
                    <PasswordInput placeholder="Contraseña" />

                    <Link
                        href="/auth/forgotPassword"
                        className="block text-[#D9D9DB] text-base font-medium mb-1.5 mt-1"
                    >
                        ¿Olvidaste la contraseña?
                    </Link>

                    <button
                        type="submit"
                        className="w-full py-2 bg-[#4A362F] text-white border-none rounded-xl cursor-pointer text-base mt-2 h-10"
                    >
                        Inicia Sesión
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
