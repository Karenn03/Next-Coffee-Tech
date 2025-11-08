"use client";

import React from "react";
import { useCart } from "@/app/(dashboard)/shoppingCart/cartContext";
import MenuTitle from "@/components/titles/MenuTitle";
import ProductsBox from "@/components/boxes/ProductsBox";

import BagelJamónQueso from "@/public/img/bagel-de-jamón-y-queso.png";
import BagelQuesoCrema from "@/public/img/bagel-de-queso-crema.png";
import BagelSalmónAhumado from "@/public/img/bagel-de-salmón-ahumado.png";
import Benedictinos from "@/public/img/benedictinos.png";
import BowlAçai from "@/public/img/bowl-de-açai.png";
import BowlYogurt from "@/public/img/bowl-de-yogurt.png";
import BowlQuinuaVegetales from "@/public/img/bowl-de-quinua-y-vegetales.png";
import Pancakes from "@/public/img/pancakes.png";
import PancakesChocolate from "@/public/img/pancakes-de-chocolate.png";
import SándwichCarneQueso from "@/public/img/sándwich-de-carne-y-queso.png";
import SándwichJamónQueso from "@/public/img/sándwich-de-jamón-y-queso.png";
import SándwichPavoAguacate from "@/public/img/sándwich-de-pavo-y-aguacate.png";
import TortillaJamónQueso from "@/public/img/tortilla-de-jamón-y-queso.png";
import TostadaAguacate from "@/public/img/tostada-de-aguacate.png";
import TostadasFrancesas from "@/public/img/tostadas-francesas.png";
import TostadaJamónQueso from "@/public/img/tostada-de-jamón-y-queso.png";
import Waffles from "@/public/img/waffles.png";
import WrapCarnesMozzarella from "@/public/img/wrap-carnes-y-mozzarella.png";
import WrapCostillitas from "@/public/img/wrap-costillitas.png";
import WrapHawaiano from "@/public/img/wrap-hawaiano.png";
import WrapJamónMozzarella from "@/public/img/wrap-de-jamón-y-mozzarella.png";
import WrapPollo from "@/public/img/wrap-pollo.png";
import WrapRoastBeef from "@/public/img/wrap-roast-beef.png";
import WrapTradicionalRes from "@/public/img/wrap-tradicional-de-res.png";

const Breakfasts = () => {
  const { addToCart } = useCart();
  return (
    <>
      <MenuTitle title="Desayunos y Brunch" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 p-5 pb-11">
        <ProductsBox
          title="BAGEL DE JAMÓN Y QUESO"
          imageSrc={BagelJamónQueso}
          imageAlt="Bagel de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BAGEL DE QUESO CREMA"
          imageSrc={BagelQuesoCrema}
          imageAlt="Bagel de Queso Crema"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BAGEL DE SALMÓN AHUMADO"
          imageSrc={BagelSalmónAhumado}
          imageAlt="Bagel de Salmón Ahumado"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BENEDICTINOS"
          imageSrc={Benedictinos}
          imageAlt="Benedictinos"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BOWL DE AÇAI"
          imageSrc={BowlAçai}
          imageAlt="Bowl de Açai"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BOWL DE YOGURT"
          imageSrc={BowlYogurt}
          imageAlt="Bowl de Yogurt"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="BOWL DE QUINUA Y VEGETALES"
          imageSrc={BowlQuinuaVegetales}
          imageAlt="Bowl de Quinua y Vegetales"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="PANCAKES"
          imageSrc={Pancakes}
          imageAlt="Pancakes"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="PANCAKES DE CHOCOLATE"
          imageSrc={PancakesChocolate}
          imageAlt="Pancakes de Chocolate"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="SÁNDWICH DE CARNE Y QUESO"
          imageSrc={SándwichCarneQueso}
          imageAlt="Sándwich de Carne y Queso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="SÁNDWICH DE JAMÓN Y QUESO"
          imageSrc={SándwichJamónQueso}
          imageAlt="Sándwich de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="SÁNDWICH DE PAVO Y AGUACATE"
          imageSrc={SándwichPavoAguacate}
          imageAlt="Sándwich de Pavo y Aguacate"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="TORTILLA DE JAMÓN Y QUESO"
          imageSrc={TortillaJamónQueso}
          imageAlt="Tortilla de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="TOSTADA DE AGUACATE"
          imageSrc={TostadaAguacate}
          imageAlt="Tostada de Aguacate"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="TOSTADAS FRANCESAS"
          imageSrc={TostadasFrancesas}
          imageAlt="Tostadas Francesas"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="TOSTADA DE JAMÓN Y QUESO"
          imageSrc={TostadaJamónQueso}
          imageAlt="Tostada de Jamón y Queso"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WAFFLES"
          imageSrc={Waffles}
          imageAlt="Waffles"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP CARNES Y MOZZARELLA"
          imageSrc={WrapCarnesMozzarella}
          imageAlt="Wrap Carnes y Mozzarella"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP COSTILLITAS"
          imageSrc={WrapCostillitas}
          imageAlt="Wrap Costillitas"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP HAWAIANO"
          imageSrc={WrapHawaiano}
          imageAlt="Wrap Hawaiano"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP DE JAMÓN Y MOZZARELLA"
          imageSrc={WrapJamónMozzarella}
          imageAlt="Wrap de Jamón y Mozzarella"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP DE POLLO"
          imageSrc={WrapPollo}
          imageAlt="Wrap de Pollo"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP ROAST BEEF"
          imageSrc={WrapRoastBeef}
          imageAlt="Wrap Roast Beef"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
        <ProductsBox
          title="WRAP TRADICIONAL DE RES"
          imageSrc={WrapTradicionalRes}
          imageAlt="Wrap Tradicional de Res"
          detailsLink="/"
          price={4.99}
          onAddToCart={addToCart}
        />
      </div>
    </>
  );
};

export default Breakfasts;
