"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import Input from "@/components/Inputs/Input";
import PasswordInput from "@/components/Inputs/PasswordInput";
import logo from "@/public/img/logo.png";
import forms from "@/public/img/forms.jpg";

const SignUp = () => {
    const [documento, setDocumento] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/personas/add", {
                documento,
                nombres,
                apellidos,
                correoElectronico,
                contraseña,
                telefono,
                direccion
            });
            console.log("Login exitoso:", response.data);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <section
            className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center h-screen bg-cover bg-center relative font-montserrat px-4 md:px-24"
            style={{ backgroundImage: `url(${forms.src})` }}
        >
            <div className="absolute inset-0 bg-[#150D0C99] z-10"></div>
            <div className="bg-[#978F84F2] bg-opacity-95 rounded-3xl p-6 max-w-[360px] w-full shadow-lg text-center text-white z-20 relative md:ml-24 md:mt-12 mt-22">
                <div className="text-center mb-4">
                    <Image
                        className="mx-auto"
                        src={logo.src}
                        alt="Logo"
                        width={70}
                        height={70}
                    />
                </div>
                <h2 className="font-bold text-[#4A362F] text-base mb-5">
                    ¿Ya tienes una cuenta?
                    <Link href="/auth/signIn" className="text-white ml-1.5">
                        Inicia sesión
                    </Link>
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input icon="fa-id-card" type="text" placeholder="Documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                    <Input icon="fa-user-pen" type="text" placeholder="Nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                    <Input icon="fa-user-large" type="text" placeholder="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                    <Input icon="fa-envelope" type="email" placeholder="Correo Electrónico" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} />
                    <PasswordInput placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    <PasswordInput placeholder="Confirmar contraseña" />
                    <Input icon="fa-phone" type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <Input icon="fa-location-dot" type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#4A362F] text-white border-none rounded-xl cursor-pointer text-base mt-2 h-10 hover:bg-[#3b2d27] transition"
                    >
                        Regístrate
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
