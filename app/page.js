"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    const div3d = document.querySelector(".div-3d");

    // Temporizador para enderezar el div automáticamente
    setTimeout(() => {
      div3d.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 500); // Ajusta este tiempo según necesites
  }, []);
  return (
    <div>
      <div className="h-screen flex flex-col items-center">
        <div className=" flex items-center flex-col justiyf-center">
          <p className="text-center pt-24  text-5xl font-extrabold ">
            ¡Haz que tus Beats Resuenen en Latinoamérica!
          </p>
          <p className="text-center  text-md ">
            Explora, conecta y colabora con una comunidad vibrante de creadores
            musicales en toda Latinoamérica.
          </p>
          <div className="mt-5">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Empezar</span>
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
        </div>
        <div className="div-3d shadow-violet-950 shadow-2xl rounded-xl  w-7/12 mt-10">
          <video src="/video.mp4" className="w-12/12 rounded-xl" autoPlay playsInline loop muted/>
        </div>
      </div>

      <div className="min-h-screen">
        <div className="flex">
          <div className="w-5/12  mt-20 flex justify-end mr-10">
            <img
              src="/chica.png"
              className="w-8/12 rounded-xl shadow-xl shadow-violet-200"
              alt=""
            />
          </div>
          <div className="w-7/12  flex justify-center items-start flex-col ">
            <p className="text-center text-2xl  font-light">
              Mostra tu musica y conectate con artistas de todo el mundo.
            </p>
            <p className="text-center text-xl  mt-2 font-bold">
              Unite a nuestra comunidad.
            </p>
            <div className="flex justify-center mt-5  ">
              <button className="boton-unico">
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">Forma parte</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-4xl mt-36 font-extrabold">
            Eleva Tus Beats a un Nivel Global{" "}
          </p>
          <div className="flex justify-center">
            <p className="text-center text-md mt-2 font-light w-6/12">
              Transforma cada beat en una oportunidad global. En Yasound, vendes
              tu música de manera sencilla y segura, abriendo puertas a un mundo
              de posibilidades.{" "}
            </p>
          </div>
          <div className="flex justify-around mt-20">
            <div className="e-card playing">
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height={50}
                  width={50}
                >
                  <g
                    stroke="#f5f5f7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="13" x="3" y="6" rx="2"></rect>
                    <path d="M3 10h17.5M7 15h2"></path>
                  </g>
                </svg>
                Pago seguro
              </div>
            </div>
            <div className="e-card playing">
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop flex flex-col items-center">
                <svg
                  height={50}
                  width={50}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f5f5f7"
                  stroke="#f5f5f7"
                  data-name="Layer 1"
                  viewBox="0 -8 72 72"
                >
                  <g>
                    <path d="M59.25 12.42l-.83.27-4.42.39-1.27 2-.91-.29-3.59-3.19-.52-1.66L47 8.16l-2.23-2-2.63-.51-.06 1.2 2.58 2.52 1.26 1.48-1.42.75-1.15-.34-1.73-.73V9.14l-2.2-.94-.75 3.29-2.29.51.23 1.84 3 .57.52-2.93 2.46.37 1.14.67h1.84L46.8 15l3.34 3.38-.25 1.32-2.69-.34-4.64 2.34-3.34 4-.43 1.78h-1.21l-2.23-1-2.17 1 .54 2.29.94-1.09h1.67l-.12 2 1.38.4L39 32.67l2.2-.67 2.57.4 3 .8 1.48.18 2.52 2.86 4.87 2.86-3.15 6-3.32 1.54-1.26 3.44-4.81 3.21-.51 1.85a28 28 0 0016.66-42.72z"></path>
                    <path d="M39.22 42.63l-2-3.78L39.05 35l-1.87-.56-2.1-2.11-4.66-1L28.88 28v1.92h-.68l-4-5.44V20l-2.94-4.78-4.67.83h-3.16l-1.59-1 2-1.6-2 .46A28 28 0 0036 56a29 29 0 003.51-.25l-.29-3.39s1.29-5 1.29-5.2-1.29-4.53-1.29-4.53zM18.41 9l5-.7 2.29-1.25 2.58.74 4.12-.23 1.42-2.22 2.05.34 5-.47 1.38-1.52 2-1.29 2.74.41 1-.15a27.91 27.91 0 00-33.51 7.49h0zm18.77-6.22L40 1.21l1.84 1.06-2.66 2-2.54.26-1.14-.74zM28.71 3l1.29.54L31.63 3l.9 1.56-3.82 1-1.83-1.06s1.79-1.15 1.83-1.5z"></path>
                  </g>
                </svg>
                Visibilidad global
              </div>
            </div>
            <div className="e-card playing">
              <div className="image"></div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>

              <div className="infotop flex flex-col items-center">
                <svg
                  height={50}
                  width={50}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#f5f5f7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  ariaLabelledby="supportIconTitle"
                  color="#000"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d="M18 9h-2a2 2 0 00-2 2v2a2 2 0 002 2h0a2 2 0 002-2V9A9 9 0 000 9v4a2 2 0 002 2h0a2 2 0 002-2v-2a2 2 0 00-2-2H0"
                      transform="translate(3 3)"
                    ></path>
                    <path d="M21 14v4c0 2-.667 3-2 3h-5"></path>
                  </g>
                </svg>
                Soporte diario 
              </div>
            </div>
          </div>
          <div className="w-screen grid grid-cols-2 mt-36 ">
            <div className="flex justify-start items-center flex-col">
              <p className="text-center text-4xl font-extrabold">
                Contamos con asistencia en
              </p>
              <div className="flex justify-center my-5">
                <img
                  src="/spotify.svg"
                  className="mx-1 bg-black rounded-full border border-black"
                  style={{ width: "50px" }}
                />
                <img
                  src="/applemusic.svg"
                  className="mx-1"
                  style={{ width: "50px" }}
                />{" "}
                <img
                  src="/deezer.svg"
                  className="mx-1"
                  style={{ width: "50px" }}
                />{" "}
              </div>
            </div>
            <div className=" flex justify-center items-start">
              <div class="form-container">
                <form class="form">
                  <div class="form-group">
                    <label
                      className="text-slate-800 font-bold mb-2"
                      for="email"
                    >
                      Nombre
                    </label>
                    <input required="" name="email" id="email" type="text" />
                  </div>
                  <div class="form-group">
                    <label
                      className="text-slate-800 font-bold mb-2"
                      for="email"
                    >
                      Celular
                    </label>
                    <input required="" name="email" id="email" type="text" />
                  </div>
                  <div class="form-group">
                    <label
                      className="text-slate-800 font-bold mb-2"
                      for="email"
                    >
                      E-mail
                    </label>
                    <input required="" name="email" id="email" type="text" />
                  </div>
                  <div class="form-group">
                    <label
                      className="text-slate-800 font-bold mb-2"
                      for="textarea"
                    >
                      Mensaje
                    </label>
                    <textarea
                      required=""
                      cols="50"
                      rows="10"
                      id="textarea"
                      name="textarea"
                    >
                      {" "}
                    </textarea>
                  </div>
                  <div>
                    <div className="flex justify-center mt-5  ">
                      <button className="boton-unico ">
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">Enviar</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
