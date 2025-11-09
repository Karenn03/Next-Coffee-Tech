"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from 'next/link';
import { useCart } from '@/app/(pages)/shoppingCart/cartContext';

const ShoppingCart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const increaseQuantity = (title, currentQty) => {
        updateQuantity(title, currentQty + 1);
    };

    const decreaseQuantity = (title, currentQty) => {
        updateQuantity(title, currentQty - 1);
    };

    const totalAmount = cart.reduce(
        (sum, item) => sum + (parseFloat(item.price) || 0) * item.quantity,
        0
    );

    return (
        <div className="pt-24 bg-white min-h-screen px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 py-6">
                <div className="flex-1 bg-stone-300 rounded-2xl shadow-md p-4 sm:p-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#4A362F] text-center mb-6">
                        Carrito de Compras
                    </h1>
                    {cart.length === 0 ? (
                        <div className="text-center flex flex-col items-center justify-center p-5 w-full min-h-[200px]">
                            <Icon icon="tabler:shopping-cart-x" width="130" height="130" className="text-[130px] sm:text-[170px] text-[#978F84] mb-5" />
                            <p className="font-fjalla text-[#4A362F] text-xl sm:text-2xl font-bold my-1.5">
                                Parece que tu carrito de compras está vacío...
                            </p>
                            <p className="font-fjalla text-[#978F84] text-base sm:text-lg font-medium my-1.5">
                                Empieza agregando tus productos favoritos.
                            </p>
                            <Link
                                href="/menu"
                                className="bg-[#4A362F] text-white px-7 py-2.5 mt-5 rounded-lg text-sm sm:text-base hover:bg-[#2D211C] transition"
                            >
                                Agrega tu primer producto
                            </Link>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {cart.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-[#FAF6F3] rounded-xl border border-[#e4d9d3]"
                                >
                                    <div className="flex justify-center sm:block">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 text-[#4A362F]">
                                        <span className="font-semibold block text-sm sm:text-base">
                                            {item.title}
                                        </span>
                                        <div className="flex items-center gap-3 mt-3 sm:mt-2">
                                            <button
                                                onClick={() => decreaseQuantity(item.title, item.quantity)}
                                                disabled={item.quantity <= 1}
                                                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#e8ded7] text-[#4A362F] font-bold hover:bg-[#d9cec7] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                −
                                            </button>
                                            <span className="font-semibold text-lg sm:text-xl">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => increaseQuantity(item.title, item.quantity)}
                                                className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-[#e8ded7] text-[#4A362F] font-bold hover:bg-[#d9cec7] transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.title)}
                                            className="mt-4 sm:mt-3 px-3 py-1 bg-red-600 text-white rounded-lg 
                                                           hover:bg-red-700 transition text-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="lg:w-1/3 bg-stone-300 rounded-2xl shadow-md p-6 h-fit">
                    <h2 className="text-xl font-bold text-[#4A362F] mb-4">
                        Resumen del Pedido
                    </h2>
                    <div className="flex justify-between text-[#4A362F] mb-1.5">
                        <span>Total de artículos:</span>
                        <span className="font-semibold">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </div>
                    <div className="flex justify-between text-[#4A362F] mb-1.5">
                        <span>Envío:</span>
                        <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between text-[#4A362F] mb-1.5 italic">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#FAF6F3] rounded-lg p-2 my-2 border border-[#d9cec7]">
                        <i className="fa fa-ticket text-[#4A362F]"></i>
                        <input
                            type="text"
                            placeholder="Ingresar código de cupón"
                            className="flex-1 outline-none text-[#4A362F] placeholder-[#4A362F]/60 bg-transparent"
                        />
                    </div>
                    <div className="flex justify-between text-[#4A362F] mb-1.5">
                        <span>Descuento:</span>
                        <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between text-[#4A362F] mt-4 text-xl font-semibold">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
