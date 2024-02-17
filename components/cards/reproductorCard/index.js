import gsap, { Power1, Power2 } from "gsap";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSearchParams } from "next/navigation";

export const ReproductorComponent = ({
  title,
  artist,
  img,
  precio,
  audio,
  licenses,
}) => {
  const [isPlay, setIsPlay] = useState(null);
  console.log(licenses);

  useEffect(() => {
    licenses && console.log(licenses);
  }, [licenses]);

  const togglePlayPause = () => {
    if (isPlay) {
      pause(); // Asume que esta función detiene la reproducción
    } else {
      play(); // Asume que esta función inicia la reproducción
    }
    setIsPlay(!isPlay);
  };
  const play = () => {
    const audio = document.getElementById(`${artist}-${title}-${precio}`);
    setIsPlay(true);
    audio.play();
  };
  const pause = () => {
    const audio = document.getElementById(`${artist}-${title}-${precio}`);
    setIsPlay(false);
    audio.pause();
  };

  useEffect(() => {
    const validArtist = artist
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");
    const validTitle = title
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");
    const selector = `.glowElement-${validArtist}-${validTitle}`;

    isPlay && play();
    isPlay == false && pause();
    isPlay &&
      gsap.to(selector, {
        boxShadow: "0 0 20px #22C55E", // Ajusta para el efecto deseado
        yoyo: true, // Para que la animación vaya y venga
        duration: 1, // Duración de la animación en segundos
        ease: Power1.easeInOut,
      });

    !isPlay &&
      gsap.to(selector, {
        boxShadow: "0 0 4px rgba(0,0,0,0.5)",
        ease: Power2.easeOut,
        duration: 1,
        delay: 0.5,
      });
  }, [isPlay]);

  return (
    <div className="flex w-full justify-center">
      <div
        className={`flex p-4 w-10/12 rounded-xl glowElement-${artist
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-_]/g, "")}-${title
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-_]/g, "")}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.1)), url('${img}')`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <audio
            id={`${artist}-${title}-${precio}`}
            className="hidden"
            src={audio}
          ></audio>

          {/* <div className="album-cover">
            <img src={`${img}`} className="h-full w-full rounded-xl" />
          </div> */}
          <div>
            <div className="">
              <p className="font-sans text-white text-2xl">{title}</p>
              <p className="text-white font-light mr-4 text-xl">${precio}</p>
            </div>

            <div className="flex">
              <div className="buttons my-5">
                <button
                  className={isPlay ? "pause-btn" : "play-btn"}
                  onClick={togglePlayPause}
                >
                  {isPlay ? (
                    // Icono de Pausa
                    <svg
                      viewBox="0 0 16 16"
                      className="bi bi-pause-fill"
                      fill="currentColor"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        fill="white"
                        d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
                      ></path>
                    </svg>
                  ) : (
                    // Icono de Reproducción
                    <svg
                      viewBox="0 0 16 16"
                      className="bi bi-play-fill"
                      fill="currentColor"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path
                        fill="white"
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className=" flex items-center">
              <Drawer className="w-full  ">
                <DrawerTrigger asChild>
                  <div className="flex items-center">
                    <div className="h-fit  ">
                      <button className="  my-2  flex items-center bg-black p-2 rounded-xl text-xl hover:bg-violet-800  transition-all duration-200 text-white hover:text-[#f5f5f7]">
                        {" "}
                        <svg
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 "
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <g fill="#fff">
                            <path d="M11.25 17a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"></path>
                            <path
                              fillRule="evenodd"
                              d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987.947.987.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303-.897.716-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716-.897-.716-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56.948-.987 2.636-.987 6.01-.987zM12.75 10.5a.75.75 0 00-1.5 0v4.378A2.25 2.25 0 1012.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 100-1.5c-.305 0-.886-.219-1.416-.69-.519-.46-.834-1.021-.834-1.56z"
                              clipRule="evenodd"
                            ></path>
                            <path
                              d="M8.51 2h6.98c.232 0 .41 0 .566.015 1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2z"
                              opacity="0.4"
                            ></path>
                            <path
                              d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953a2.587 2.587 0 00-.023.07c.398-.12.812-.199 1.232-.253 1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138.419.054.833.133 1.232.253a2.453 2.453 0 00-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953H6.311z"
                              opacity="0.7"
                            ></path>
                          </g>
                        </svg>
                        Comprar
                      </button>
                    </div>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full flex justify-center">
                    <DrawerHeader className="w-9/12">
                      <DrawerTitle className=" text-2xl text-center ">
                        <span className="uppercase">{title}</span> -{" "}
                        <span className="uppercase"> {artist}</span>
                      </DrawerTitle>
                      <DrawerDescription className="text-justify flex justify-around mt-10 text-xl">
                        {licenses &&
                          licenses.map((e,index) => (
                            <div className="border-2 w-fit my-5 p-4 border-black rounded-xl" key={index}>
                              <div className="flex flex-col justify-center mb-5 ">
                                <p className="text-2xl text-black uppercase font-bold mr-5">{e.titulo}</p>
                                <p className="font-sans text-xl font-bold">
                                  ${e.precio}
                                </p>
                              </div>
                              <div className="flex justify-center">
                                <div className="border cursor-pointer border-black  mx-2 transition-all duration-400  hover:scale-[1.1] hover:opacity-[0.7] rounded-lg">
                                  <img
                                    src="/merca.png"
                                    className="w-[100px] rounded-lg"
                                    alt=""
                                  />
                                </div>
                                <div className="border cursor-pointer border-black mx-2 transition-all duration-400  hover:scale-[1.1] hover:opacity-[0.7]  rounded-lg">
                                  <img
                                    src="/paypal.png"
                                    className="w-[100px] rounded-xl"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                      </DrawerDescription>
                    </DrawerHeader>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
