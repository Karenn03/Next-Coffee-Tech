import Image from "next/image";

import Navbar from "@/components/Navbar";
import Title1 from "@/components/titles/Title1";
import Title2 from "@/components/titles/Title2";
import Title3 from "@/components/titles/Title3";
import Button1 from "@/components/buttons/Button1";
import OffersBox from "@/components/boxes/OffersBox";
import CommentsBox from "@/components/boxes/CommentsBox";
import Footer from "@/components/Footer";

import landing from "@/public/img/landing.jpg";
import cafePideAqui from "@/public/img/cafe-pide-aqui.png";
import oferta1 from "@/public/img/oferta-1.png";
import oferta2 from "@/public/img/oferta-2.png";
import oferta3 from "@/public/img/oferta-3.png";
import oferta4 from "@/public/img/oferta-4.png";
import exclusiveOffers from "@/public/img/exclusive-offers.jpg"
import comentario from "@/public/img/comentario.jpg"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Welcome Section */}
      <section
        className="relative flex flex-col justify-center items-center bg-fixed bg-cover bg-center text-white w-full h-screen px-4 text-center"
        style={{ backgroundImage: `url(${landing.src})` }}
      >
        <div className="absolute inset-0 bg-[#4A362F61] z-10"></div>
        <div className="z-20 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-2">
            Bienvenidos a
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-fjalla leading-tight">
            COFFEE TECH
          </h2>
        </div>
      </section>
      {/* Order Here Section */}
      <div className="relative mb-5 p-5 text-center">
        <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
        <Title1 text={"Pide Aquí"} />
        <div className="flex flex-col md:flex-row justify-around items-center pt-5 pb-5 px-4 md:px-8">
          <div className="grid p-3 md:p-5 w-full md:w-[30%] text-center md:text-left mb-8 md:mb-0">
            <Title3 text={"Domicilio"} />
            <p className="text-base md:text-lg font-montserrat mt-3">
              Disfruta de tu café favorito sin salir de casa. Haz tu pedido a domicilio y nosotros nos encargamos de llevarlo hasta tu puerta en el menor tiempo posible.
              Selecciona tus bebidas y bocadillos favoritos, y relájate mientras nosotros hacemos el resto.
            </p>
            <div className="grid justify-center md:justify-start mt-4">
              <Button1 option={"Pide a domicilio"} />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={cafePideAqui}
              alt="Coffee"
              className="w-64 md:w-80 lg:w-96 h-auto mt-4 mb-4"
            />
          </div>
          <div className="grid p-3 md:p-5 w-full md:w-[30%] text-center md:text-right">
            <Title3 text={"Para retirar"} />
            <p className="text-base md:text-lg font-montserrat mt-3">
              Haz tu pedido en línea y retíralo en la cafetería cuando te sea más conveniente. Evita las filas y asegura tu bebida favorita lista para llevar.
              Perfecto para cuando estás en movimiento pero no quieres renunciar a tu café preferido.
            </p>
            <div className="grid justify-center md:justify-end mt-4">
              <Button1 option={"Pide para retirar"} />
            </div>
          </div>
        </div>
      </div>
      {/* Special Offers Section */}
      <div className="ofertas-especiales">
        <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
        <Title1 text={"OFERTAS ESPECIALES"} />
        <Title2 text={"¡No te pierdas nuestras promociones!"} />
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <OffersBox
            image={oferta1}
            title={"Calor y sabor"}
            description={
              "Lleva un Caramel Macchiato y obtén un Espresso Doble gratis. Ideal para los amantes del café intenso."
            }
          />
          <OffersBox
            image={oferta2}
            title={"Delicias al horno"}
            description={
              "Compra una Dona de Chocolate y obtén una Galleta Chips de Chocolate gratis. Doble delicia."
            }
          />
          <OffersBox
            image={oferta3}
            title={"Comienza bien tu día"}
            description={
              "Disfruta de un Wrap de Pollo y obtén un Bowl de Yogurt con 20% de descuento. Un snack saludable y sabroso."
            }
          />
          <OffersBox
            image={oferta4}
            title={"Refresca tu día"}
            description={
              "Compra un Iced Cappuccino y obtén un Iced Caramel Latte con 50% de descuento. Refresca tu paladar."
            }
          />
        </div>
      </div>
      {/* Exclusive Offers Section */}
      <section
        className="relative flex flex-col pt-24 pb-24 pr-0 pl-0 justify-center items-center text-center mt-36 mb-14 w-full min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${exclusiveOffers.src})` }}
      >
        <div className="relative z-20 text-white p-5 rounded-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 font-fjalla">
            ¡Recibe Ofertas Exclusivas!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-montserrat">
            Suscríbete para recibir las mejores ofertas directamente en tu correo
          </p>
          <form className="flex justify-center items-center w-full px-4">
            <div className="flex flex-col sm:flex-row w-full max-w-md bg-[#FFFEFC] border-2 border-[#978F84] rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[#7A7267] transition-all duration-300">
              <div className="flex items-center w-full sm:flex-1 px-3 py-2">
                <i className="fa-regular fa-envelope text-[#978F84] text-lg mr-2"></i>
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex-1 text-gray-800 bg-transparent outline-none font-montserrat text-base"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#978F84] text-white font-montserrat font-semibold px-5 py-2 hover:bg-[#7A7267] transition-all duration-300 w-full sm:w-auto"
              >
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Comments Section */}
      <div className="w-0.5 h-42 bg-[#B7AE8F] mx-auto mb-5 mt-5" />
      <div className="max-w-7xl mx-auto p-1">
        <Title1 text={"COMENTARIOS"} />
        <Title2 text={"¡Tu opinión también cuenta!"} />
        <section className="py-10 px-6 md:px-16 font-montserrat text-[#4A362F]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-9">
            {/* Overall rating */}
            <div className="flex flex-col justify-center items-center text-center w-full md:w-1/3">
              <div className="flex flex-col items-center justify-center w-[180px]">
                <h2 className="text-6xl font-montserrat font-bold text-[#4A362F] w-full text-center mt-2">
                  4,5
                </h2>
                <div className="flex justify-center text-[#B7AE8F] text-xl mt-2 mb-2 w-full">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="text-md text-[#7A7267] mt-1 w-full text-center">
                  29.156 Reseñas
                </p>
              </div>
            </div>
            {/* Review summary */}
            <div className="w-full md:w-1/3 md:pt-1">
              <h3 className="font-semibold text-[#3B2B26] mb-3 text-left">
                Resumen de reseñas
              </h3>
              {[5, 4, 3, 2, 1].map((num, idx) => (
                <div key={idx} className="flex items-center mb-[3px]">
                  <span className="w-6 text-sm">{num}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                    <div
                      className="h-2 bg-[#B7AE8F] rounded-full"
                      style={{
                        width:
                          num === 5
                            ? "90%"
                            : num === 4
                              ? "70%"
                              : num === 3
                                ? "35%"
                                : num === 2
                                  ? "15%"
                                  : "10%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Category ratings */}
            <div className="w-full md:w-1/3 flex flex-col justify-between md:pt-[2.2rem]">
              <div>
                {[
                  { name: "Productos", value: 4.72 },
                  { name: "Atención", value: 4.5 },
                  { name: "Precios", value: 4.43 },
                  { name: "Ambiente", value: 4.65 },
                  { name: "Ubicación", value: 4.5 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-1"
                  >
                    <span className="w-24 text-sm">{item.name}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                      <div
                        className="h-2 bg-[#B7AE8F] rounded-full"
                        style={{
                          width: `${(item.value / 5) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm">{item.value.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Actions*/}
          <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#4A362F] text-white px-4 py-2 rounded-full font-montserrat text-sm hover:bg-[#5E443C] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <i className="fa-regular fa-pen-to-square"></i>
              Escribir reseña
            </button>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 bg-[#4A362F] text-white px-4 py-3 rounded-full font-montserrat text-sm hover:bg-[#5E443C] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#4A362F] text-white px-4 py-2 rounded-full font-montserrat text-sm hover:bg-[#5E443C] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <i className="fa-solid fa-filter"></i>
                Filtros
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-2">
        <CommentsBox
          imageSrc={comentario}
          userName="Nicol Vasquez"
          rating={5}
          commentDate="Hace 1 mes"
          commentText="Buena atención, muy amables, un sitio bastante acogedor recomendado si gustas de una experiencia diferente, los desayunos son deliciosos."
        />
        <CommentsBox
          imageSrc={comentario}
          userName="Zareth Blanco"
          rating={4.5}
          commentDate="Hace un año"
          commentText="Un local muy amplio y el ambiente es muy tranquilo. El personal es siempre muy amable y la variedad de café lo hace un lugar genial. Cuenta con WiFi y mobiliario adecuado para pasar el rato, trabajar y conversar con amigos. El menú es costoso (más caro que en una sala de onces) pero muy parecidos a los precios de otras franquicias de ese estilo."
        />
        <CommentsBox
          imageSrc={comentario}
          userName="Alex Ramos"
          rating={5}
          commentDate="Hace 7 meses"
          commentText="El personal es siempre amable y servicial, y hacen que la experiencia sea aún más agradable. Sus baristas son conocedores y están dispuestos a ayudarte a elegir la bebida perfecta para tu gusto. Ya sea que prefieras un café clásico o una bebida más elaborada, encontrarás una amplia variedad en su menú."
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;