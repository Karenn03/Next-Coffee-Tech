import React from "react";
import MenuTitle from "@/components/titles/MenuTitle";
import ProductsBox from "@/components/boxes/ProductsBox";

import FrappéMocca from "@/public/img/frappé-mocca.png";
import FrappéOreo from "@/public/img/frappé-oreo.png";
import IcedCappuccino from "@/public/img/iced-cappuccino.png";
import IcedCaramelLatte from "@/public/img/iced-caramel-latte.png";
import IcedCaramelMacchiato from "@/public/img/iced-caramel-macchiato.png";
import IcedMacchiato from "@/public/img/iced-macchiato.png";
import IcedMocha from "@/public/img/iced-mocha.png";
import IcedLatte from "@/public/img/iced-latte.png";
import MilkshakeChocolate from "@/public/img/milkshake-chocolate.png";
import MilkshakeFresa from "@/public/img/milkshake-fresa.png";
import MilkshakeOreo from "@/public/img/milkshake-oreo.png";
import MilkshakeVainilla from "@/public/img/milkshake-vainilla.png";

const ColdDrinks = () => {
  return (
    <>
      <MenuTitle title="Bebidas Frías" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 p-5 pb-11">
        <ProductsBox
          title="FRAPPÉ MOCCA"
          imageSrc={FrappéMocca.src}
          imageAlt="Frappé Mocca"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="FRAPPÉ OREO"
          imageSrc={FrappéOreo.src}
          imageAlt="Frappé Oreo"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED CAPPUCCINO"
          imageSrc={IcedCappuccino.src}
          imageAlt="Iced Cappuccino"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED CARAMEL LATTE"
          imageSrc={IcedCaramelLatte.src}
          imageAlt="Iced Caramel Latte"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED CARAMEL MACCHIATO"
          imageSrc={IcedCaramelMacchiato.src}
          imageAlt="Iced Caramel Macchiato"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED MACCHIATO"
          imageSrc={IcedMacchiato.src}
          imageAlt="Iced Macchiato"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED MOCHA"
          imageSrc={IcedMocha.src}
          imageAlt="Iced Mocha"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="ICED LATTE"
          imageSrc={IcedLatte.src}
          imageAlt="Iced Latte"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MILKSHAKE CHOCOLATE"
          imageSrc={MilkshakeChocolate.src}
          imageAlt="Milkshake Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MILKSHAKE FRESA"
          imageSrc={MilkshakeFresa.src}
          imageAlt="Milkshake Fresa"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MILKSHAKE OREO"
          imageSrc={MilkshakeOreo.src}
          imageAlt="Milkshake Oreo"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MILKSHAKE VAINILLA"
          imageSrc={MilkshakeVainilla.src}
          imageAlt="Milkshake Vainilla"
          detailsLink="/"
          price={4.99}
        />
      </div>
    </>
  );
};

export default ColdDrinks;
