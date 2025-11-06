import React from "react";
import Navbar from "@/components/Navbar";
import HotDrinks from "@/components/menuSections/HotDrinks";
import ColdDrinks from "@/components/menuSections/ColdDrinks";
import Bakery from "@/components/menuSections/Bakery";
import Breakfasts from "@/components/menuSections/Breakfasts";

const Menu = () => {
    return (
        <>
            <Navbar />
            <HotDrinks />
            <ColdDrinks />
            <Bakery />
            <Breakfasts />
        </>
    );
};

export default Menu;
