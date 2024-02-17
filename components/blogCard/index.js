import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import useUsuarios from "@/app/hook/useUsers";
import axios from "axios";
import Marquee from "react-fast-marquee";

export const BlogCard = ({
  title,
  subtitle,
  descripcion,
  img,
  _id,
  comentarios,
}) => {
  const { usuario } = useUsuarios();
  const [mensaje, setMensaje] = useState("");

  const onSendMenssage = async () => {
    try {
      const response = await axios.put("/api/blog", {
        _id,
        comentarios: [
          ...comentarios,
          {
            autor: usuario.username,
            body: mensaje,
            image: usuario.profileimg,
          },
        ],
      });
      setMensaje("");
      response && alert("mensaje enviado con exito");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div
      className="w-10/12 my-2 rounded-xl flex flex-col items-center justify-around ]"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.1)), url(${img})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="flex  items-center flex-col justify-start">
        <p className="text-center mt-10 font-bold w-10/12 text-xl text-white">
          {title}
        </p>

        <Drawer className="w-full">
          <DrawerTrigger asChild>
            <div className="flex justify-center w-full">
              <button
                variant="outline"
                className="bg-violet-800/80 items-center cursor-pointer  text-[#f5f5f5] flex hover:scale-[1.2] transition-all duration-300  px-2 py-1 text-md mt-5 rounded-xl"
              >
                <svg
                  width={20}
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#fff" strokeWidth="1.5">
                    <path
                      d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4z"
                      opacity="0.5"
                    ></path>
                    <path strokeLinecap="round" d="M8 12h8M8 8h8M8 16h5"></path>
                  </g>
                </svg>
                Ver más
              </button>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full flex justify-center">
              <DrawerHeader className="w-9/12">
                <div className="w-full flex justify-center mb-10">
                  <div className="w-5/12">
                    <img src={img} className=" rounded-xl" />
                  </div>
                </div>

                <DrawerTitle className=" text-2xl">{subtitle}</DrawerTitle>
                <DrawerDescription className="text-justify text-xl">
                  {descripcion}
                </DrawerDescription>
              </DrawerHeader>
            </div>
          </DrawerContent>
        </Drawer>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button
              variant="outline"
              className="bg-fuchsia-900/80 items-center cursor-pointer  text-[#f5f5f5] flex hover:scale-[1.2] transition-all duration-300  px-2 py-1 text-xl mt-2 rounded-xl"
            >
              <svg
                width={20}
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g>
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g fill="#f5f5f7" transform="translate(-204 -255)">
                      <path d="M228 267a2 2 0 10.001 4.001A2 2 0 00228 267zm-8 14c-1.168 0-2.296-.136-3.38-.367l-4.708 2.83.063-4.639c-3.609-2.17-5.975-5.758-5.975-9.824 0-6.627 6.268-12 14-12s14 5.373 14 12c0 6.628-6.268 12-14 12zm0-26c-8.836 0-16 6.269-16 14 0 4.419 2.345 8.354 6 10.919V287l7.009-4.253c.97.16 1.968.253 2.991.253 8.836 0 16-6.268 16-14 0-7.731-7.164-14-16-14zm-8 12a2 2 0 10.001 4.001A2 2 0 00212 267zm8 0a2 2 0 10.001 4.001A2 2 0 00220 267z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              Comentar
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Mensaje</DialogTitle>
              <DialogDescription>
                Dejanos tu opinión sobre nuestro blog.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  onChange={(e) => setMensaje(e.target.value)}
                  id="name"
                  value={mensaje}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <button
                onClick={() => onSendMenssage()}
                className="bg-black text-white p-2 rounded-xl"
              >
                Enviar
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" mt-10 w-full">
        <Marquee className="w-full" autoFill
        
        speed={50}
        >
          {comentarios.map((e, index) => (
            <div className="bg-white/70 p-4 mx-2 rounded-md" key={index}>
              <p className="font-bold text-xs">{e.autor}</p>
              <p className="capitalize text-xs mt-2">{e.body}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
