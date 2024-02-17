import React from "react";

export const CardPricing = ({ isPremium }) => {
  const features = [
    {
      titulo: "Perfil Básico",
      body: "Al registrarte de forma gratuita, podrás crear un perfil básico en nuestro sitio web.",
    },
    {
      titulo: "Carga Limitada",
      body: "Podrás subir un número limitado de tus beats y sonidos.",
    },
    {
      titulo: "Exploración Completa",
      body: "Tendrás acceso completo para explorar todas las características de nuestro sitio web.",
    },
    {
      titulo: "Preproducción Completa",
      body: "Podrás realizar preproducciones completas de tus beats y sonidos antes de compartirlas.",
    },
    {
      titulo: "Interacciones Sociales",
      body: "Serás capaz de seguir otros perfiles y dar 'Me gusta' a los contenidos que te gusten.",
    },
  ];

  const premiumFeatures = [
    {
      titulo: "Perfil Destacado",
      body: "Destaca tu trabajo con un perfil personalizado.",
    },
    {
      titulo: "Carga Ilimitada",
      body: "Sube tantos beats como quieras.",
    },
    {
      titulo: "Sin Anuncios",
      body: "Navega sin molestias de publicidad.",
    },
    {
      titulo: "Colaboración Libre",
      body: "Trabaja sin restricciones con otros usuarios.",
    },
    {
      titulo: "Licencias Flexibles",
      body: "Obtén licencias más amplias para tus beats.",
    },
    {
      titulo: "Comisión Reducida",
      body: "Paga menos por transacciones.",
    },
    {
      titulo: "Acceso Prioritario",
      body: "Sé el primero en probar nuevas funciones.",
    },
    {
      titulo: "Soporte VIP",
      body: "Obtén ayuda rápida y prioritaria.",
    },
    {
      titulo: "Descuentos Especiales",
      body: "Ahorra en servicios adicionales.",
    },
    {
      titulo: "Eventos Exclusivos",
      body: "Participa en eventos especiales.",
    },
  ];

  return (
    <>
      <div className="border-2 bg-sky-950 p-4 w-full rounded-[22px]">
        <div className="w">
          <p className="font-sans text-white text-center text-4xl font-bold my-5">
            {isPremium ? "Premium" : "Estandar"}
          </p>
          <div className="price-container text-gray-200 flex items-center justify-center">
            <p className="text-xl text-gray-200 font-bold">
              {isPremium ? "15 USD" : "GRATIS / FREE"}
            </p>
            <p
              style={{ display: isPremium ? "auto" : "none" }}
              className="text-xl ml-2"
            >
              /mo
            </p>
          </div>
          <div
            style={{ display: isPremium ? "auto" : "none" }}
            className="price-container mx-5 flex items-center justify-center"
          >
            <p className="text-xl font-bold text-gray-200">15000 ARS</p>
            <p
              style={{ display: isPremium ? "auto" : "none" }}
              className="text-xl text-gray-200 ml-2"
            >
              /mensual
            </p>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-2 mt-10">
            {isPremium
              ? premiumFeatures.map((e,index) => (
                  <li className="list flex items-start w-9/12" key={index}>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                        width={20}
                        className="mr-2 mt-1"
                      >
                        <g strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" opacity="0.5"></circle>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.5 12.5l2 2 5-5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-col flex">
                      <p className="font-bold text-md text-white">{e.titulo}</p>
                      <p className="font-light text-xs text-gray-200">
                        {e.body}
                      </p>
                    </div>
                  </li>
                ))
              : features.map((e,index) => (
                  <li className="list flex items-start w-10/12 my-2" key={index}>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                        width={25}
                        className="mr-2 mt-1"
                      >
                        <g strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" opacity="0.5"></circle>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.5 12.5l2 2 5-5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="flex-col flex">
                      <p className="font-bold text-md text-white">{e.titulo}</p>
                      <p className="font-light text-xs text-gray-200">
                        {e.body}
                      </p>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
        <div className=" w-12/12 flex justify-center  my-5">
          <div className=" ">
            <button
              type="button"
              className="bg-slate-200 p-2 rounded-xl text-black "
            >
              Suscribete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
