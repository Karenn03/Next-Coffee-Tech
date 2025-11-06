import React from "react";
import MenuTitle from "@/components/titles/MenuTitle";
import ProductsBox from "@/components/boxes/ProductsBox";

import CheesecakeFresa from "@/public/img/cheesecake-de-fresa.png";
import CroissantAlmendras from "@/public/img/croissant-de-almendras.png";
import CroissantChocolate from "@/public/img/croissant-de-chocolate.png";
import CroissantJamónQueso from "@/public/img/croissant-de-jamón-y-queso.png";
import CroissantMantequilla from "@/public/img/croissant-de-mantequilla.png";
import DonaChocolateBlanco from "@/public/img/dona-chocolate-blanco.png";
import DonaChocolate from "@/public/img/dona-chocolate.png";
import DonaFresa from "@/public/img/dona-fresa.png";
import GalletaChipsChocolate from "@/public/img/galleta-chips-chocolate.png";
import GalletaAvena from "@/public/img/galleta-avena.png";
import GalletaChocolate from "@/public/img/galleta-chocolate.png";
import GalletaMantequilla from "@/public/img/galleta-mantequilla.png";
import MuffinChipsBanana from "@/public/img/muffin-chips-banana.png";
import MuffinChipsChocolate from "@/public/img/muffin-chips-chocolate.png";
import MuffinArándanos from "@/public/img/muffin-arandanos.png";
import MuffinChocolate from "@/public/img/muffin-chocolate.png";
import MuffinFresa from "@/public/img/muffin-fresa.png";
import MuffinOreo from "@/public/img/muffin-oreo.png";
import MuffinRedVelvet from "@/public/img/muffin-red-velvet.png";
import PastelChocolate from "@/public/img/pastel-chocolate.png";
import PastelLimón from "@/public/img/pastel-limon.png";
import PastelRedVelvet from "@/public/img/pastel-red-velvet.jpg";
import PastelZanahoria from "@/public/img/pastel zanahoria.png";
import Tiramisú from "@/public/img/tiramisu.png";

const Bakery = () => {
  return (
    <>
      <MenuTitle title="Panadería y Pastelería" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 p-5 pb-11">
        <ProductsBox
          title="CHEESECAKE DE FRESA"
          imageSrc={CheesecakeFresa.src}
          imageAlt="Cheesecake de Fresa"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="CROISSANT DE ALMENDRAS"
          imageSrc={CroissantAlmendras.src}
          imageAlt="Croissant de Almendras"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="CROISSANT DE CHOCOLATE"
          imageSrc={CroissantChocolate.src}
          imageAlt="Croissant de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="CROISSANT DE JAMÓN Y QUESO"
          imageSrc={CroissantJamónQueso.src}
          imageAlt="Croissant de Jamón y Queso"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="CROISSANT DE MANTEQUILLA"
          imageSrc={CroissantMantequilla.src}
          imageAlt="Croissant de Mantequilla"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="DONA DE CHOCOLATE BLANCO"
          imageSrc={DonaChocolateBlanco.src}
          imageAlt="Dona de Chocolate Blanco"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="DONA DE CHOCOLATE"
          imageSrc={DonaChocolate.src}
          imageAlt="Dona de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="DONA DE FRESA"
          imageSrc={DonaFresa.src}
          imageAlt="Dona de Fresa"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="GALLETA CHIPS DE CHOCOLATE"
          imageSrc={GalletaChipsChocolate.src}
          imageAlt="Galleta Chips de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="GALLETA DE AVENA"
          imageSrc={GalletaAvena.src}
          imageAlt="Galleta de Avena"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="GALLETA DE CHOCOLATE"
          imageSrc={GalletaChocolate.src}
          imageAlt="Galleta de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="GALLETA DE MANTEQUILLA"
          imageSrc={GalletaMantequilla.src}
          imageAlt="Galleta de Mantequilla"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN CHIPS DE BANANA"
          imageSrc={MuffinChipsBanana.src}
          imageAlt="Muffin Chips de Banana"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN CHIPS DE CHOCOLATE"
          imageSrc={MuffinChipsChocolate.src}
          imageAlt="Muffin Chips de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN DE ARÁNDANOS"
          imageSrc={MuffinArándanos.src}
          imageAlt="Muffin de Arándanos"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN DE CHOCOLATE"
          imageSrc={MuffinChocolate.src}
          imageAlt="Muffin de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN DE FRESA"
          imageSrc={MuffinFresa.src}
          imageAlt="Muffin de Fresa"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN DE OREO"
          imageSrc={MuffinOreo.src}
          imageAlt="Muffin de Oreo"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="MUFFIN DE RED VELVET"
          imageSrc={MuffinRedVelvet.src}
          imageAlt="Muffin de Red Velvet"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="PASTEL DE CHOCOLATE"
          imageSrc={PastelChocolate.src}
          imageAlt="Pastel de Chocolate"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="PASTEL DE LIMÓN"
          imageSrc={PastelLimón.src}
          imageAlt="Pastel de Limón"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="PASTEL DE RED VELVET"
          imageSrc={PastelRedVelvet.src}
          imageAlt="Pastel de Red Velvet"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="PASTEL DE ZANAHORIA"
          imageSrc={PastelZanahoria.src}
          imageAlt="Pastel de Zanahoria"
          detailsLink="/"
          price={4.99}
        />
        <ProductsBox
          title="TIRAMISÚ"
          imageSrc={Tiramisú.src}
          imageAlt="Tiramisú"
          detailsLink="/"
          price={4.99}
        />
      </div>
    </>
  );
};

export default Bakery;
