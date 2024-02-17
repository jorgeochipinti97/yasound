"use client";
import React from "react";
import useBlogs from "../hook/useBlogs";
import { BlogCard } from "@/components/blogCard";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { blogs } = useBlogs();

  return (
    <div>
      <div className="min-h-screen pt-10">
        <div className="flex justify-center">
          <p
            style={{ letterSpacing: -2 }}
            className="font-semibold pt-20 font-sans  text-center  capitalize text-7xl degradado-texto"
          >
            Comunidad Yasound
          </p>
        </div>
        <div className="flex justify-center items-center flex-col mt-10 text-2xl">
          <p
            className="w-9/12 text-justify text-md font-light font-sans"
            style={{ letterSpacing: -1 }}
          >
            No solo vendemos beats, ¡También creamos conexiones y fomentamos la
            colaboración! Descubre características que te permiten interactuar,
            colaborar en proyectos, recibir retroalimentación valiosa y
            compartir tus conocimientos con otros apasionados de la música.
          </p>
          <p className="mt-5 font-sans font-bold opacity-[80%]">
            ¡Podemos llevar tu música al siguiente nivel!
          </p>
          <div class="shadowSeparator bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1vh] rounded-full  w-4/12 my-2"></div>
          <div className=" flex flex-col items-center justify-center  ">
            <p
              className="font-sans font-bold text-6xl mt-20"
              style={{ letterSpacing: -2 }}
            >
              Nuestras noticias
            </p>
            {blogs && (
              <div className="w-screen mt-5  flex justify-center ">
                <div className=" grid grid-cols-2 w-10/12 ">
                  {blogs.map((e,index) => (
                    <div className="flex w-full justify-center" key={index}>
                  
                      <BlogCard
                        title={e.titulo}
                        subtitle={e.subtitulo}
                        descripcion={e.cuerpo}
                        img={e.imagenes[0] ? e.imagenes[0] : ""}
                        _id={e._id}
                        comentarios={e.comentarios}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
