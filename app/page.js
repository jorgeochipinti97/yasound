"use client";
import { BackgroundGradientAnimation } from "@/components/Background";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { FeaturedCard } from "@/components/cards/FeaturedCard";
import { SliderCoverFlow } from "@/components/sliders/CoverflowSlider";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import gsap, { Power1 } from "gsap";
import CountdownTimer from "@/components/Countdown";

export default function Home() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [phone, setPhone] = useState("");
  const [rol, setRol] = useState("");

  const postWaitlist = async () => {
    try {
      if (!email || !nombre || !phone || !rol) {
        gsap.to(".completedatos", {
          opacity: 1,
          ease: Power1.easeIn,
        });
        setTimeout(() => {
          gsap.to(".completedatos", {
            opacity: 0,
            ease: Power1.easeIn,
          });
        }, 3000);
      }
      const data = await axios.post("/api/waitlist", {
        nombre: nombre || "",
        email: email || "",
        rol: rol || "",
        celular: phone || "",
      });
      data &&
        gsap.to(".shownoti", {
          opacity: 1,
          ease: Power1.easeIn,
        });
      data && setEmail("");
      data && setNombre("");
      data && setPhone("");
      data && setRol("");

      data &&
        setTimeout(() => {
          gsap.to(".shownoti", {
            opacity: 0,
            ease: Power1.easeIn,
          });
        }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const { push } = useRouter();
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

  // useEffect(() => {
  //   const div3d = document.querySelector(".div-3d");

  //   setTimeout(() => {
  //     div3d.style.transform = "perspective(1000px) rotateX(0deg)";
  //   }, 500); // Ajusta este tiempo según necesites
  // }, []);

  return (
    <>
      <Alert
        variant="destructive"
        className="completedatos h-fit z-50 w-fit fixed bottom-5 right-5"
        style={{ opacity: 0 }}
      >
        <AlertTitle>Completa todos los campos por favor.</AlertTitle>
        <AlertDescription>¡Gracias por tu comprensión!</AlertDescription>
      </Alert>
      <Alert
        className="shownoti h-fit z-50 w-fit fixed bottom-5 right-5"
        style={{ opacity: 0 }}
      >
        <svg
          height={20}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
        >
          <g>
            <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
            <path
              fill="#000"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M24 4l5.253 3.832 6.503-.012 1.997 6.188 5.268 3.812L41 24l2.021 6.18-5.268 3.812-1.997 6.188-6.503-.012L24 44l-5.253-3.832-6.503.012-1.997-6.188-5.268-3.812L7 24l-2.021-6.18 5.268-3.812 1.997-6.188 6.503.012L24 4z"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M17 24l5 5 10-10"
            ></path>
          </g>
        </svg>
        <AlertTitle>Enviado con éxito.</AlertTitle>
        <AlertDescription>¡Gracias por confiar en nosotros!</AlertDescription>
      </Alert>

      <div className="min-h-screen flex justify-center items-center flex-col w-screen">
        <Spotlight
          className="top-[3%] left-0 md:left-60 md:-top-20"
          fill="#ef21aa"
        />
        <p className="font-semibold  font-geist mt-5 font-sans  text-center  capitalize text-7xl degradado-texto">
          Yasound
        </p>
        <p className="font-geist text-center font-bold text-md">
          La plataforma destinada a ser la número uno en Latinoamérica para
          comercializacion de beats.
        </p>
        <div className="mt-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-black/80 text-white transition-all duration-100 ">
                Conocenos
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white/80">
              <div className="flex justify-center">
                <img src="/logo.png" alt="" className="w-6/12" />
              </div>
              <p className="w-12/12 md:w-12/12  text-start  mt-2">
                Visualizamos una plataforma donde los productores puedan mostrar
                sus beats, y los artistas encuentren la inspiración para sus
                próximos proyectos. Aunque todavía estamos en desarrollo,
                nuestra meta es facilitar la colaboración y la innovación
                musical en un ambiente inclusivo y accesible.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        <CountdownTimer />

        <div className="flex justify-center items-center w-screen flex-col">
          <Input
            className="w-9/12 md:w-6/12 mt-5"
            placeHolder="Nombre"
            onChangeCapture={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <Input
            className="w-9/12 md:w-6/12 mt-5"
            placeHolder="Email"
            onChangeCapture={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            className="w-9/12 md:w-6/12 mt-5"
            placeHolder="Celular"
            onChangeCapture={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <Input
            className="w-9/12 md:w-6/12 mt-5"
            placeHolder="Rol (Productor, Artista, otros)"
            onChangeCapture={(e) => setRol(e.target.value)}
            value={rol}
          />
          <Button className="md:ml-5 mt-5" onClick={() => postWaitlist()}>
            Enviar
          </Button>
        </div>

        <p className="font-geist font-bold tracking-tighter mt-5 w-9/12 text-center md:w-12/12">
          Apoya el Nacimiento de una Comunidad Musical
        </p>
        <p className="font-geist w-11/12 md:text-start  tracking-tighter text-center md:w-6/12 mt-2">
          Cada donación nos acerca a realizar nuestra visión. Con tu ayuda,
          podemos construir una plataforma que celebre y promueva el talento
          musical en toda su diversidad.
        </p>
        <div className="my-5 flex items-center justify-center">
          <Button
            className="bg-white text-black hover:bg-[#f5f5f7] mx-2 "
            onClick={() => push("https://www.paypal.me/yasound")}
          >
            {" "}
            <svg
              width={20}
              className="mr-5 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3.5 0 48 48"
            >
              <g>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#022B87" transform="translate(-804 -660)">
                    <path d="M838.912 663.62c-2.241-2.534-6.29-3.62-11.472-3.62h-15.035a2.15 2.15 0 00-2.128 1.801l-6.26 39.393a1.284 1.284 0 001.275 1.48h9.282l2.332-14.67-.073.46a2.143 2.143 0 012.12-1.802h4.41c8.668 0 15.452-3.492 17.434-13.593.06-.3.154-.874.154-.874.563-3.738-.004-6.275-2.04-8.576zm4.389 10.488c-2.156 9.945-9.03 15.208-19.937 15.208h-3.956L816.458 708h6.416c.927 0 1.714-.669 1.86-1.576l.075-.396 1.476-9.273.095-.512a1.877 1.877 0 011.858-1.576h1.172c7.58 0 13.516-3.056 15.25-11.89.696-3.547.362-6.52-1.359-8.669z"></path>
                  </g>
                </g>
              </g>
            </svg>
            Aportá
          </Button>
          <Button
            className="bg-white text-black hover:bg-[#f5f5f7] mx-2 "
            onClick={() => push("https://link.mercadopago.com.ar/yasound")}
          >
            <svg
              width={30}
              className="mr-5 "
              xmlns="http://www.w3.org/2000/svg"
              version="1"
              viewBox="0 0 270 187"
            >
              <path
                d="M1210 1863c-292-17-598-114-825-261-110-72-252-221-302-317-66-128-78-180-77-335 1-247 73-412 255-585C527 113 952-17 1443 4c579 25 1017 253 1188 619 50 109 63 178 63 332 0 126-2 148-26 216-37 104-88 188-166 272-276 292-763 451-1292 420zm435-69c171-25 362-82 490-146 76-38 195-111 195-119 0-12-111-49-198-65-159-30-229-17-527 94-62 24-84 27-200 26-143 0-190-12-280-74-24-17-53-30-65-30s-71-12-132-27l-110-26-88 16c-80 16-340 93-340 101s140 87 210 119c175 79 407 136 620 151 92 6 319-4 425-20zm-50-287c39-14 98-37 133-52 194-81 409-71 644 29 12 6 32-8 76-53 94-96 169-222 188-319 6-29 6-29-68-47-115-28-273-78-390-124l-107-42-153 133c-198 172-325 278-380 316-106 73-185 62-324-44-122-93-142-104-196-104-47 0-98 16-98 31 0 5 45 55 99 111 156 162 240 201 411 194 69-3 114-11 165-29zm-960-97c128-33 197-35 292-11 45 12 84 21 88 21s-27-37-69-82c-81-87-91-113-57-147 40-40 144-53 208-26 20 8 75 44 123 80 99 74 143 95 198 95 62 0 107-34 482-359 194-168 204-184 154-235-19-18-37-26-63-26-32 0-50 12-149 100-62 55-117 100-122 100-25 0-3-31 90-125 66-67 100-110 100-124 0-33-17-59-50-76-56-29-75-21-171 71-77 74-109 94-109 66 0-4 34-45 75-92 41-46 75-92 75-102 0-24-48-58-82-58-23 0-47 16-101 65-68 62-97 78-97 53 0-6 25-37 55-69s55-62 55-69c0-29-86-35-144-9-20 9-22 16-19 67 3 45 0 64-16 90-24 37-76 72-107 72-23 0-34 17-34 54 0 53-70 106-141 106-32 0-49 7-75 29-42 37-106 49-156 28-33-14-37-14-55 5-30 30-95 35-136 11l-34-20-39 23c-65 40-231 100-384 139-80 20-148 40-152 43-11 11 36 136 73 195 18 28 68 89 112 133l78 82 112-39c62-21 148-47 192-59zM375 955c61-20 137-50 170-68l60-32v-50c1-80 51-135 125-135 20 0 30-5 30-15 0-8 16-33 36-55 34-38 83-58 125-52 8 2 20-8 26-21 15-32 95-71 132-64 23 5 31 1 41-19 35-64 144-89 210-47 32 20 32 20 84 1 62-24 125-20 167 11 17 13 43 21 66 21 46 0 98 30 121 70 12 21 25 30 44 30 65 0 134 51 144 107 6 30 9 33 43 33 81 0 144 76 125 150-9 33-8 40 5 46 134 54 461 154 504 154 19 0 19-4 13-69-35-385-436-691-1017-775-135-20-419-21-556-1-409 58-749 237-912 481-61 90-89 165-103 270-16 119-19 117 104 88 57-13 153-40 213-59zm404-85c10-5 24-23 31-40l13-31 27 26c55 53 154 38 167-25 6-35 9-35 52-14 25 13 37 13 66 4 48-16 69-57 60-121l-7-48 33 9c41 12 66 5 101-28 35-32 43-71 24-116-18-43-71-71-116-61-34 7-76 51-85 88-8 31-12 32-39 12-25-19-40-19-82 1-29 14-45 36-50 69-1 6-2 13-3 17 0 4-16 1-34-7-61-25-129 24-131 95 0 32-4 39-16 34-58-25-104-15-126 27-37 73 42 149 115 109z"
                transform="matrix(.1 0 0 -.1 0 187)"
              ></path>
            </svg>
            Aportá
          </Button>
        </div>
        <div>
          <div className="h-fit mt-5 w-screen flex items-center justify-center flex-wrap">
            <a href="https://twitter.com/YasoundSite">
              <img
                src="/twitter.png"
                className=" rounded-full bg-black p-2 border-black w-[40px] md:w-[55px] hover:scale-[1.2]  grayscale-[100%] hover:grayscale-0 transition-all duration-100 cursor-pointer  mx-2"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/yasound.beat/">
              <img
                src="/instagram.svg"
                className="w-[45px] md:w-[60px] hover:scale-[1.2]  grayscale-[100%] hover:grayscale-0 transition-all duration-100 cursor-pointer  mx-2"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* <BackgroundGradientAnimation> */}
        {/* <div className=" indexz ">
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
      </div> */}
        {/* </BackgroundGradientAnimation> */}
        {/* <div
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
                </button> */}

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
        {/* </div>
            </div>
          </div>
          <div className="w-full rounded-xl  flex justify-start  flex-col items-center    ">
            <p
              className="font-extrabold mb-5 mt-10 md:mt-0 md:mb-10 font-sans text-center  text-white text-5xl md:text-7xl"
              style={{ letterSpacing: -3 }}
            >
              Contactanos
            </p>
            <form className="flex flex-col items-center justify-start  w-full ">
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
      </div> */}
        {/* <Marquee className="  py-10" direction="right" autoFill>
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
      </Marquee> */}
      </div>
      <div
        className={`h-fit z-50 w-fit fixed bottom-5 right-5 shownoti`}
        style={{ opacity: 0 }}
      >
        <Alert>
          <svg
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
          >
            <g>
              <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
              <path
                fill="#000"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M24 4l5.253 3.832 6.503-.012 1.997 6.188 5.268 3.812L41 24l2.021 6.18-5.268 3.812-1.997 6.188-6.503-.012L24 44l-5.253-3.832-6.503.012-1.997-6.188-5.268-3.812L7 24l-2.021-6.18 5.268-3.812 1.997-6.188 6.503.012L24 4z"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M17 24l5 5 10-10"
              ></path>
            </g>
          </svg>
          <AlertTitle>Enviado con éxito.</AlertTitle>
          <AlertDescription>¡Gracias por confiar en nosotros!</AlertDescription>
        </Alert>
      </div>
    </>
  );
}
