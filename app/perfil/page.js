"use client";
import { ReproductorComponent } from "@/components/cards/reproductorCard";
import { SliderFlipComponent } from "@/components/sliders/Flip";
import { LicenseSlider } from "@/components/sliders/LincenseSlider";
import { WavyBackground } from "@/components/ui/Wavy";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUsuarios from "../hook/useUsers";
import { useAuth0 } from "@auth0/auth0-react";

const Page = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [beats, setBeats] = useState([]);
  const { user } = useAuth0();

  const { usuarios } = useUsuarios();

  const [usuario, setUsuario] = useState();

  useEffect(() => {
    const createuser = usuarios.filter((e) => e.email == user.email);
    createuser && setUsuario(createuser[0]);
  }, [user && usuarios]);

  const chargeBeats = async () => {
    const data = await axios.get("/api/beats");
    setBeats(data.data.data.filter((e) => e.autor == usuario.username));
  };

  useEffect(() => {
    usuario && chargeBeats();
  }, [usuario]);

  return (
    <WavyBackground className=" mx-auto pb-40">
      <div className="md:w-[40vw] pd-20  md:fixed  h-fit md:min-h-screen">
        <section className="flex flex-col items-center">
          <div className="w-full flex justify-center pt-20">
            <div className="w-[100px] h-[100px] rounded-full ">
              <img
                src="/fede.jpg"
                className="h-full w-full rounded-full"
                alt=""
              />
            </div>
          </div>
          <p className="text-4xl font-semibold mt-5 flex items-center">
            Federico Medina
          </p>
          <p className="text-4xl">🇦🇷</p>
          <div className="w-6/12"></div>
          <div className="flex justify-around flex-wrap w-8/12">
            <span className="text-md bg-black text-white p-2  rounded-xl font-bold mt-5">
              TRAP
            </span>
            <span className="text-md bg-black rounded-xl text-white p-2 font-bold mt-5">
              RAP
            </span>
            <span className="text-md bg-black rounded-xl text-white p-2 font-bold mt-5">
              REGGAETON
            </span>
          </div>
          <p className="text-center w-9/12 md:w-6/12 mt-10">
            Fugiat occaecat aliqua veniam nulla in non dolore. Non nulla sit
            consectetur esse dolore ad. Sint voluptate aute voluptate dolore
            aliqua id consequat reprehenderit minim esse non.
          </p>
        </section>
        <div className="icons w-full flex   p-5 items-center justify-center">
          <a href="#" className="icon instagram rounded-full mx-1 bg-black/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              className="mt-3"
            >
              <path
                d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19150 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9250 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87850 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12350 19.7658 2.78098 19.2067 2.52598 18.55C2.27850 17.9125 2.11098 17.1867 2.06098 16.1225C2.01350 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27850 6.0875 2.52598 5.45C2.78014 4.79167 3.12350 4.23417 3.67931 3.67833C4.23514 3.1225 4.79350 2.78 5.45098 2.525C6.08850 2.2775 6.81350 2.11 7.87850 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a href="#" className="icon whatsapp rounded-full  mx-1 bg-black/50">
            <svg
              className="mt-3"
              viewBox="0 0 24 24"
              width={"50"}
              height={"50"}
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928050 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a href="#" className="icon tiktok rounded-full mx-1 bg-black/50">
            <svg
              className="mt-4"
              fill="#ffffff"
              height="50"
              width="50"
              viewBox="0 0 512 512"
              id="icons"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.50,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.50,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="min-h-screen mt-0 md:pt-20 w-screen flex">
        <div className="md:w-[40vw] "></div>
        <div className="flex-1 flex justify-center pt-[4.4rem] flex-col">
          <div className="w-12/12 md:w-10/12  h-fit grid  grid-cols-1 md:grid-cols-2">
            <div className="w-full flex justify-center">
              <div className="h-full bg-white md:bg-slate-200/50   mr-1 rounded-xl w-11/12 md:w-[100%]  ">
                <SliderFlipComponent />
              </div>
            </div>
            <div className="h-full flex flex-col mt-5 md:mt-0 items-center ml-1 justify-center  bg-slate-200/50 rounded-xl w-[100%]  ">
              <p className="text-center font-extrabold text-3xl">Contacto</p>

              <div className="flex justify-center w-full h-2/6 mt-2">
                <textarea
                  className="w-10/12 rounded-xl  border-2 px-2 pt-1 border-black"
                  placeholder="Hola! Me interesaria coordinar una llamada..."
                />
              </div>
              <button className="animated-button my-5">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Enviar</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="w-12/12 md:w-10/12 my-5 m-1 h-full grid grid-cols-1">
            <div className="h-full  bg-white md:bg-slate-200/50 rounded-xl w-full  flex justify-around flex-col items-start ">
              {beats &&
                beats.map((e,index) => (
                  <div className="w-full flex justify-around  " key={index}>
                    <ReproductorComponent
                      precio={e.precio}
                      img={e.image}
                      artist={e.autor}
                      title={e.nombre}
                      audio={e.link}
                    />

                    <button className="boton-unico my-5 md:mt-0 ">
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <span className="circle3"></span>
                      <span className="circle4"></span>
                      <span className="circle5"></span>
                      <span className="text">Comprar</span>
                    </button>
                  </div>
                ))}
              
              <div className="w-full flex justify-around md:flex-row my-5 flex-col items-center ">
                <ReproductorComponent
                  precio={"9,00"}
                  img={"/2.jpg"}
                  artist={"Fede Medina"}
                  title={"Trap #1"}
                />
                <button className="boton-unico my-5 md:mt-0 ">
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                  <span className="circle3"></span>
                  <span className="circle4"></span>
                  <span className="circle5"></span>
                  <span className="text">Comprar</span>
                </button>
              </div>
              <div className="w-full flex justify-around md:flex-row my-5 flex-col items-center ">
                <ReproductorComponent
                  precio={"9,00"}
                  img={"/3.jpg"}
                  artist={"Fede Medina"}
                  title={"Rap #1"}
                />{" "}
                <button className="boton-unico my-5 md:mt-0 ">
                  <span className="circle1"></span>
                  <span className="circle2"></span>
                  <span className="circle3"></span>
                  <span className="circle4"></span>
                  <span className="circle5"></span>
                  <span className="text">Comprar</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-12/12 md:w-10/12  h-fit grid  grid-cols-1 md:grid-cols-2">
            <div className="w-full  flex justify-center">
              <div className="h-full bg-slate-200/50   mr-1 rounded-xl w-11/12 md:w-[100%]  ">
                <LicenseSlider />
              </div>
            </div>
            <div className="w-12/12 rounded-xl  h-full ">
              <div className="w-12/12  rounded-xl  h-[100%] py-10 flex justify-center">
                <div className="h-full   flex-col items-center py-10 flex justify-center w-11/12  mr-1 rounded-xl  md:w-[100%]  ">
                  <p className="font-geist text-2xl font-bold text-center">
                    Reservar una llamada
                  </p>
                  <DatePicker
                    className="bg-transparent z-50 text-center border-2 text-xl border-black rounded-xl mt-5"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <button className="animated-button mt-10">
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">Enviar</span>
                    <span className="circle"></span>
                    <svg
                      viewBox="0 0 24 24"
                      className="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Page;
