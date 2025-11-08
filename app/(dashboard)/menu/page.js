import Navbar from "@/components/Navbar";
import HotDrinks from "@/app/(dashboard)/menu/menuSections/HotDrinks";
import ColdDrinks from "@/app/(dashboard)/menu/menuSections/ColdDrinks";
import Bakery from "@/app/(dashboard)/menu/menuSections/Bakery";
import Breakfasts from "@/app/(dashboard)/menu/menuSections/Breakfasts";

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
