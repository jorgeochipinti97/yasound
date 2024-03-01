"use client";
import { BlogCard } from "@/components/blogCard";
import useBlogs from "../hook/useBlogs";
import { useEffect } from "react";
const Page = () => {
  const { blogs } = useBlogs();

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);
  return (
    <div className="min-h-screen bg-slate-200">
      {blogs && (
        <div className="w-screen flex flex-col items-center pt-28">
          {blogs.map((e,index) => (
            <div key={index}>
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
      )}
    </div>
  );
};

export default Page;
