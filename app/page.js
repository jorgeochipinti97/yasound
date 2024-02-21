"use client";
import { BackgroundGradientAnimation } from "@/components/Background";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { FeaturedCard } from "@/components/cards/FeaturedCard";
import { SliderCoverFlow } from "@/components/sliders/CoverflowSlider";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CardPricing } from "@/components/CardPricing";
import { useAuth0 } from "@auth0/auth0-react";
import useUsuarios from "./hook/useUsers";



export default function Home() {
  const featureData = [
    {
      title: "Conexiones Musicales",
      description:
        "Oportunidad de colaboracion conectando con músicos, productores y amantes de la música de todo el mundo. Colabora, inspira y crea juntos.",
    },
    {
      title: "Descubre Talentos Únicos",
      description:
        "Explora una amplia variedad de beats e instrumentales de productores talentosos. Encuentra la inspiración que necesitas para tus proyectos musicales.",
    },
    {
      title: "Promoción de tu Música",
      description:
        "Destaca tu talento mostrando tus creaciones en un perfil personalizado. ¡Haz que tu música sea escuchada!",
    },
    {
      title: "Asesoramiento y Recursos",
      description:
        "Accede a recursos educativos, asesoramiento en producción musical, herramientas y consejos de expertos para impulsar tu carrera musical.",
    },
    {
      title: "Perfil Avanzado",
      description:
        "Los usuarios premium disfrutarán de perfiles más destacados y personalizables, lo que les permitirá destacar aún más su trabajo. Tendrán la opción de cargar una cantidad ilimitada de beats e instrumentales.",
    },
    {
      title: "Soporte VIP",
      description:
        "Los usuarios premium recibirán un servicio de soporte al cliente prioritario, con tiempos de respuesta más rápidos.",
    },
    {
      title: "Beneficios y descuentos exclusivos",
      description: "",
    },
  ];
  const { user } = useAuth0();
  const { usuario } = useUsuarios();
  useEffect(() => {
    const div3d = document.querySelector(".div-3d");

    setTimeout(() => {
      div3d.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 500); // Ajusta este tiempo según necesites
  }, []);
  return (
    <div className="">
      {/* <BackgroundGradientAnimation> */}
      <div className=" indexz ">
        <div className="  flex flex-col items-center">
          <div className=" flex items-center flex-col justiyf-center">
            <p className="font-semibold pt-20 font-sans  text-center  capitalize text-7xl degradado-texto">
              Yasound
            </p>
            <p className="text-center  text-md mt-5  text-fuchsia-1000 md:mt-0 ">
              El sonido de tu historia.
            </p>

            <p className="text-center text-2xl md:text-3xl uppercase w-10/12  mt-10 font-sans  font-semibold ">
              La tienda virtual de instrumentales NUMERO 1° de habla hispana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 indexz">
            <div className="flex justify-center mt-10 md:mt-0 items-center">
              <div className="div-3d shadow-violet-950 shadow-2xl rounded-xl  w-11/12 md:w-12/12 ">
                <video
                  src="/video.mp4"
                  className="w-12/12 rounded-xl"
                  controls
                  autoPlay
                  playsInline
                  loop
                  muted
                />
              </div>
            </div>
            <div className="flex items-center flex-col md:mt-0 mt-10 justify-center ">
              <div className=" bg-sky-950  w-11/12 md:w-10/12 p-10  rounded-xl">
                <p className="text-center text-[#f5f5f7] font-sans  text-xl md:text-2xl font-light">
                  {" "}
                  Únete, colabora, promociona y gestiona tu carrera en{" "}
                  <span className="font-semibold"> la comunidad líder</span> de
                  habla hispana para la compra y venta de beats e
                  instrumentales.
                </p>
                <p className="text-center text-[#f5f5f7]  text-2xl font-bold mt-10">
                  {" "}
                  ¡Transforma tu creatividad en oportunidades!
                </p>
                <div className="flex justify-center">
                  <button className="  md:mt-10 md:mb-0 mt-2 mb-5 flex items-center bg-white text-black p-2 rounded-xl text-xl hover:bg-violet-950 hover:scale-[1.1] transition-all duration-200  hover:text-white ">
                    {" "}
                    <svg
                      width={25}
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g stroke="#ef21aa" strokeWidth="1.5">
                        <path
                          strokeLinecap="round"
                          d="M8 16c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8"
                        ></path>
                        <path
                          d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5"
                          opacity="0.5"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5"
                        ></path>
                      </g>
                    </svg>
                    Empezar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mb-20 ">
          <p
            className="text-center indexz  text-5xl md:text-7xl mt-10  md:mt-28 mb-0 md:mb-10 font-bold text-black"
            style={{
              // mixBlendMode: "saturation",
              opacity: 0.4,
              letterSpacing: -4,
            }}
          >
            Beats & Tracks
          </p>
          <SliderCoverFlow />
        </div>
      </div>
      {/* </BackgroundGradientAnimation> */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 30%, black),linear-gradient(to bottom,rgba(0, 0, 0, 0.9),rgba(239, 33, 170, .5)), url('./party.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" rounded-t-3xl mt-10 flex w-screen  justify-center py-10  md:mt-28`  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-10/12">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full  flex justify-center ">
              <div className="w-fit ">
                <p className="font-bold w-fit text-start text-4xl md:text-6xl  fuenteGotica text-white  ">
                  Comunidad <br /> Yasound
                </p>
              </div>
            </div>

            <div className="mt-10">
              {featureData.map((feature, index) => (
                <FeaturedCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}

              <div className="w-full flex justify-center items-start">
                <button className="  md:mt-5 md:mb-0 mt-2 mb-5 flex items-center font-bold uppercase bg-white text-black p-3 rounded-xl text-2xl hover:bg-violet-200 hover:scale-[1.1] transition-all duration-200  hover:text-slate-1000 ">
                  <img src="/diversity.svg" className="mr-2 w-[35px]" alt="" />
                  ¡Únete!
                </button>

                {/* <Drawer className="w-full ">
                  <DrawerTrigger asChild>
                    <div className="flex items-center">
                      <div className="h-fit  ">
                        <button className="  md:mt-5 md:mb-0 mt-2 mb-5 flex items-center font-bold uppercase bg-white text-black p-3 rounded-xl text-2xl hover:bg-violet-200 hover:scale-[1.1] transition-all duration-200  hover:text-slate-1000 ">
                          <img
                            src="/diversity.svg"
                            className="mr-2 w-[35px]"
                            alt=""
                          />
                          ¡Únete!
                        </button>
                      </div>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full flex justify-center">
                      <DrawerHeader className="w-11/12">
                        <DrawerDescription className="text-justify text-xl">
                          <div className="grid  md:grid-cols-2">
                            <div className="w-full flex justify-center">
                              <div className="w-9/12">
                                <BackgroundGradient className="rounded-xl">
                                <CardPricing isPremium={false} />
                                </BackgroundGradient>
                              </div>
                            </div>
                            <div className="w-full flex justify-center">
                              <div className="w-11/12">
                                <BackgroundGradient className="rounded-[22px]   ">
                                  <CardPricing isPremium={true} />
                                </BackgroundGradient>
                              </div>
                            </div>
                          </div>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer> */}
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl  flex justify-center flex-col items-center    ">
            <p
              className="font-extrabold mb-5 mt-10 md:mb-20 font-sans  text-white text-5xl md:text-7xl"
              style={{ letterSpacing: -3 }}
            >
              Contactanos
            </p>
            <form className="flex flex-col   w-full ">
              <input
                className="my-2 p-2 rounded-xl w-[100%] md:w-[500px]"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="my-2 p-2 rounded-xl w-[100%] md:w-[500px]"
                type="text"
                placeholder="Email"
              />
              <input
                className="my-2 p-2 rounded-xl w-[100%] md:w-[500px]"
                type="text"
                placeholder="Celular"
              />
              <textarea
                className="w-[100%] md:w-[500px] rounded-xl my-2 p-2"
                placeholder="Mensaje"
              />
              <div>
                <button className="  md:mt-10 md:mb-0 mt-2 mb-5 flex items-center bg-white text-black p-2 rounded-xl text-xl hover:bg-violet-200 hover:scale-[1.1] transition-all duration-200  hover:text-slate-1000 ">
                  <svg
                    className="mr-2"
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 000-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 00-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 010 .385c-.02.144-.066.285-.16.566z"
                    ></path>
                  </svg>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Marquee className="  py-20" direction="right" autoFill>
        <div className="flex items-center justify-c">
          <img src="/redbull.svg" className=" w-[200px] mx-2 " />
        </div>
        <div className="flex items-center justify-c">
          <img src="/jhon.png" className="  w-[200px] mx-2" />
        </div>
        <div className="flexitems-center justify-c ">
          <img src="/lider2.jpeg " className=" w-[200px] mx-2 " />
        </div>
        <div className="flexitems-center justify-c ">
          <img src="/logocup.png " className=" w-[200px] mx-2 " />
        </div>
      </Marquee>
    </div>
  );
}
