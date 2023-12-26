"use client";
import { CardMusic } from "@/components/CardMusic";
import { Ranking } from "@/components/ranking";
import { TableBeats } from "@/components/table-beats";
import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <>
      <div className="pt-20 min-h-screen mx-5">
        <p className="text-center text-slate-black text-5xl">
          El Latido de Tu Música
        </p>
        <p className="text-center text-slate-black text-2xl mt-2">
          Beats que Inspiran
        </p>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center mt-5  ">
            <button className="boton-unico  mx-2">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">R&B</span>
            </button>
            <button className="boton-unico  mx-2">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Reggaeton</span>
            </button>
            <button className="boton-unico  mx-2">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Hip-Hop</span>
            </button>
            <button className="boton-unico  mx-2">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Pop</span>
            </button>
            <button className="boton-unico mx-2 ">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Trap</span>
            </button>
          </div>
        </div>
        <div className="my-10 flex justify-around">
          <TableBeats />
        </div>
      </div>

      <div className="">
        <p className="text-center text-black text-3xl ">🔥Tendencias 🔥</p>

          <Marquee className="py-10" pauseOnHover>
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
            <CardMusic />
          </Marquee>

        <div className=" w-screen flex justify-center">
          <div className="mt-20 w-7/12">
            <Ranking />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
