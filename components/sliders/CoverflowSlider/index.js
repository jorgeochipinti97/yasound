import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import axios from "axios";
import { ReproductorComponent } from "@/components/cards/reproductorCard";

export const SliderCoverFlow = () => {
  const [esMovil, setEsMovil] = useState(false);

  const [beats, setBeats] = useState([]);

  const chargeBeats = async () => {
    const data = await axios.get("/api/beats");
    data && setBeats(data.data.data);
  };

  useEffect(() => {
    chargeBeats();

    const verificarSiEsMovil = () => {
      const ancho = window.innerWidth;
      setEsMovil(ancho < 768);
    };

    verificarSiEsMovil();
    window.addEventListener("resize", verificarSiEsMovil);

    return () => window.removeEventListener("resize", verificarSiEsMovil);
  }, []);

  useEffect(() => {
    console.log(esMovil);
  }, [esMovil]);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={3}
        slidesPerView={esMovil ? 1.5 : 3.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper "
        style={{ zIndex: 500 }}
      >
        {beats &&
          beats.map((e) => (
            <SwiperSlide>
              <div
                key={`${e.precio}-${e.nombre}-${e.autor}`}
                className="w-full flex  md:flex-row flex-col justify-center items-start py-10  md:justify-around "
              >
                <ReproductorComponent
                  precio={e.precio}
                  img={e.image}
                  artist={e.autor}
                  title={e.nombre}
                  audio={e.link}
                  licenses={e.licenses}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
