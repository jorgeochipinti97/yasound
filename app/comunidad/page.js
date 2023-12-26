import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen pt-10">
        <div className="flex justify-center">
        <p className="text-center text-4xl mt-10 w-10/12">Comunicate con otros artistas y mantenete informado de las ultimas tendencias musciales</p>
        </div>
        <div className="flex justify-center my-5">
        <div className="h-[60vh] bg-black w-10/12 rounded-xl"></div>
        </div>
        <div className="flex justify-center items-center flex-col mt-10 text-2xl">
            <p className="w-8/12 text-center">Ingresa a la comunidad de Discord de Yasound y encuentra un espacio para <span className="font-bold">conocer</span> e<span className="font-bold"> interactuar </span>con otros artistas. Conéctate, comparte y aprende con músicos y productores en un ambiente colaborativo.</p>
        <button class="animated-button mt-5">
        <svg
          viewBox="0 0 24 24"
          class="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span class="text">Ser parte</span>
        <span class="circle"></span>
        <svg
          viewBox="0 0 24 24"
          class="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
        </div>
        <p className="text-center text-3xl mt-20">Noticias</p>
        <div className="flex justify-around mt-10 flex-wrap">
        <div className="w-5/12 border-2 m-2 h-[300px] rounded-xl shadow-md" />
        <div className="w-5/12 border-2 m-2 h-[300px] rounded-xl shadow-md" />
        <div className="w-5/12 border-2 m-2 h-[300px] rounded-xl shadow-md" />
        <div className="w-5/12 border-2 m-2 h-[300px] rounded-xl shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default page;
