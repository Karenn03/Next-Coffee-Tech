import HotDrinks from "@/app/(pages)/menu/menuSections/HotDrinks";
import ColdDrinks from "@/app/(pages)/menu/menuSections/ColdDrinks";
import Bakery from "@/app/(pages)/menu/menuSections/Bakery";
import Breakfasts from "@/app/(pages)/menu/menuSections/Breakfasts";

const Menu = () => {
    return (
        <>
            <HotDrinks />
            <ColdDrinks />
            <Bakery />
            <Breakfasts />
        </>
    );
};

export default Menu;
