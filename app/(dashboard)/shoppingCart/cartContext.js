"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(p => p.title === item.title);

            if (existing) {
                return prev.map(p =>
                    p.title === item.title
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (title) => {
        setCart(prev => prev.filter(item => item.title !== title));
    };

    const updateQuantity = (title, quantity) => {
        setCart(prev =>
            prev.map(item =>
                item.title === title
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
