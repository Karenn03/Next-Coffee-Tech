"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";

const mesas = [
    { id: 1, capacidad: 2, ocupada: false },
    { id: 2, capacidad: 4, ocupada: true },
    { id: 3, capacidad: 2, ocupada: false },
    { id: 4, capacidad: 6, ocupada: true },
    { id: 5, capacidad: 4, ocupada: false },
    { id: 6, capacidad: 3, ocupada: true },
    { id: 7, capacidad: 8, ocupada: true },
    { id: 8, capacidad: 2, ocupada: false },
    { id: 9, capacidad: 5, ocupada: false },
];

export default function ReserveTable() {
    const [numPersonas, setNumPersonas] = useState(1);
    const [mesaSeleccionada, setMesaSeleccionada] = useState(null);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [requests, setRequests] = useState("");

    const mesasDisponibles = useMemo(() => {
        return mesas.filter(m => m.capacidad >= numPersonas);
    }, [numPersonas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reserva enviada");
    };

    return (
        <>
            <Navbar />
            <div className="pt-24 w-full min-h-screen bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 p-6 md:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full md:w-1/2 bg-[#E1DFDC] rounded-2xl shadow-xl p-8 flex flex-col gap-6"
                    >
                        <h2 className="text-3xl font-bold text-[#4A362F]">Reservar Mesa</h2>
                        <div className="flex flex-col">
                            <label className="font-semibold text-[#4A362F]">Fecha</label>
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                className="border border-[#7A7267] rounded-lg p-2 mt-1 focus:ring-2 focus:ring-amber-600 outline-none bg-[#F2F2F3]"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-[#4A362F]">Hora</label>
                            <input
                                type="time"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                className="border border-[#7A7267] rounded-lg p-2 mt-1 focus:ring-2 focus:ring-amber-600 outline-none bg-[#F2F2F3]"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-[#4A362F]">Número de personas</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={numPersonas}
                                onChange={(e) => setNumPersonas(Number(e.target.value))}
                                className="border border-[#7A7267] rounded-lg p-2 mt-1 focus:ring-2 focus:ring-amber-600 outline-none bg-[#F2F2F3]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-[#4A362F]">Peticiones especiales</label>
                            <textarea
                                value={requests}
                                onChange={(e) => setRequests(e.target.value)}
                                rows="3"
                                className="border border-[#7A7267] rounded-lg p-2 mt-1 focus:ring-2 focus:ring-amber-600 outline-none bg-[#F2F2F3]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#4A362F] text-white py-3 rounded-lg font-semibold 
                                   hover:bg-[#2D211C] transition shadow-md"
                        >
                            Confirmar Reserva
                        </button>
                    </form>
                    <div className="w-full md:w-1/2 bg-[#E1DFDC] rounded-2xl shadow-xl p-8 border border-[#e8ded7]">
                        <h2 className="text-3xl font-bold text-[#4A362F] mb-6">Selecciona tu mesa</h2>
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-green-900 rounded"></div>
                                <span className="text-[#4A362F] text-sm">Disponible</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-red-900 rounded"></div>
                                <span className="text-[#4A362F] text-sm">Ocupada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-[#4A362F] rounded"></div>
                                <span className="text-[#4A362F] text-sm">Seleccionada</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
                            {mesas.map((mesa) => {
                                const isDisponible = mesasDisponibles.includes(mesa);
                                const isSelected = mesaSeleccionada === mesa.id;
                                const bgColor = mesa.ocupada
                                    ? "bg-red-800"
                                    : isSelected
                                        ? "bg-[#5E443C]"
                                        : "bg-green-800";

                                return (
                                    <button
                                        key={mesa.id}
                                        onClick={() =>
                                            !mesa.ocupada &&
                                            isDisponible &&
                                            setMesaSeleccionada(mesa.id)
                                        }
                                        disabled={mesa.ocupada || !isDisponible}
                                        className={`
                                        w-full h-24 rounded-xl flex flex-col items-center justify-center 
                                        text-white font-bold transition shadow-md text-center
                                        ${bgColor}
                                        ${mesa.ocupada || !isDisponible
                                                ? "opacity-40 cursor-not-allowed"
                                                : "cursor-pointer hover:scale-105"
                                            }
                                    `}
                                    >
                                        <span>Mesa {mesa.id}</span>
                                        <span className="text-sm">Cap: {mesa.capacidad}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
