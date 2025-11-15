import React from "react";
import footer from "@/public/img/footer.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center text-white pt-30 md:pt-22 pb-5 px-5 relative min-h-[400px] z-10 mt-20 font-montserrat"
      style={{ backgroundImage: `url(${footer.src})` }}
    >
      <div className="max-w-7xl mx-auto relative z-20">
        <h2 className="mb-6 text-3xl font-fjalla text-white text-center md:text-left">
          COFFEE TECH
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-4 text-center md:text-left">
          {/* Columna 1 */}
          <div>
            <h4 className="mb-5 text-xl text-white font-semibold">
              Sobre Nosotros
            </h4>
            <ul className="list-none p-0 space-y-3">
              {[
                "Quienes somos",
                "Servicios",
                "Nuestras sedes",
                "Trabaja con Coffee Tech",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white hover:text-[#B7AE8F] no-underline text-base transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Columna 2 */}
          <div>
            <h4 className="mb-5 text-xl text-white font-semibold">Soporte</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#B7AE8F] text-base transition-colors duration-200"
                >
                  Ayuda y FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#B7AE8F] text-base transition-colors duration-200"
                >
                  Soporte en línea
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#B7AE8F] text-base transition-colors duration-200"
                >
                  +57 315 667 7315
                </a>
              </li>
              <li>
                <a
                  href="mailto:soporte@coffeetech.com"
                  className="text-white hover:text-[#B7AE8F] text-base transition-colors duration-200"
                >
                  soporte@coffeetech.com
                </a>
              </li>
            </ul>
          </div>
          {/* Columna 3 */}
          <div>
            <h4 className="mb-5 text-xl text-white font-semibold">Legal</h4>
            <ul className="list-none p-0 space-y-3">
              {[
                "Aviso legal",
                "Política de privacidad",
                "Política de cookies",
                "Política de calidad",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white hover:text-[#B7AE8F] text-base transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Columna 4 */}
          <div>
            <h4 className="mb-5 text-xl text-white font-semibold">
              Redes Sociales
            </h4>
            <ul className="list-none p-0 space-y-3">
              {[
                { icon: "fa-instagram", name: "Instagram" },
                { icon: "fa-facebook", name: "Facebook" },
                { icon: "fa-x-twitter", name: "Twitter" },
                { icon: "fa-youtube", name: "YouTube" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center justify-center md:justify-start gap-2 text-white hover:text-[#B7AE8F] transition-colors duration-200"
                  >
                    <i className={`fa-brands ${social.icon} text-base`} />
                    <span className="text-sm">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-10 pt-4 border-t border-white/50">
        <p>© Coffee Tech. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
