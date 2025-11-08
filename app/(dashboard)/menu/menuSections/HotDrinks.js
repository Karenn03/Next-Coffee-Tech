"use client";

import React from "react";
import { useCart } from "@/app/(dashboard)/shoppingCart/cartContext";
import MenuTitle from "@/components/titles/MenuTitle";
import ProductsBox from "@/components/boxes/ProductsBox";

import CappuccinoAmericano from "@/public/img/cappuccino-americano.png";
import Cappuccino from "@/public/img/cappuccino.png";
import CaramelMacchiato from "@/public/img/caramel-macchiato.png";
import EspressoDoble from "@/public/img/espresso-doble.png";
import EspressoSencillo from "@/public/img/espresso-sencillo.png";
import Chocolate from "@/public/img/chocolate.png";
import ChocolateBlanco from "@/public/img/chocolate-blanco.jpg";
import LatteMacchiato from "@/public/img/latte-macchiato.png";
import Latte from "@/public/img/latte.png";
import Macchiato from "@/public/img/macchiato.png";
import MacchiatoEspresso from "@/public/img/macchiato-espresso.png";
import Mocha from "@/public/img/mocha.png";

const HotDrinks = () => {
  const { addToCart } = useCart();
  return (
    <>
      <MenuTitle title="Bebidas Calientes" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 p-5 pb-11">
        <ProductsBox
          title="CAPPUCCINO AMERICANO"
          imageSrc={CappuccinoAmericano.src}
          imageAlt="Cappuccino Americano"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="CAPPUCCINO"
          imageSrc={Cappuccino.src}
          imageAlt="Cappuccino"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="CARAMEL MACCHIATO"
          imageSrc={CaramelMacchiato.src}
          imageAlt="Caramel Macchiato"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="ESPRESSO DOBLE"
          imageSrc={EspressoDoble.src}
          imageAlt="Espresso Doble"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="ESPRESSO SENCILLO"
          imageSrc={EspressoSencillo.src}
          imageAlt="Espresso Sencillo"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="CHOCOLATE"
          imageSrc={Chocolate.src}
          imageAlt="Chocolate"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="CHOCOLATE BLANCO"
          imageSrc={ChocolateBlanco.src}
          imageAlt="Chocolate Blanco"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="LATTE MACCHIATO"
          imageSrc={LatteMacchiato.src}
          imageAlt="Latte Macchiato"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="LATTE"
          imageSrc={Latte.src}
          imageAlt="Latte"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="MACCHIATO"
          imageSrc={Macchiato.src}
          imageAlt="Macchiato"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="MACCHIATO ESPRESSO"
          imageSrc={MacchiatoEspresso.src}
          imageAlt="Macchiato Espresso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="MOCHA"
          imageSrc={Mocha.src}
          imageAlt="Mocha"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
      </div>
    </>
  );
};

export default HotDrinks;
