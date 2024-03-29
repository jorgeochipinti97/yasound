"use client";
import useUsuarios from "@/app/hook/useUsers";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { ReproductorComponent } from "@/components/cards/reproductorCard";
import { SliderFlipComponent } from "@/components/sliders/Flip";
import { LicenseSlider } from "@/components/sliders/LincenseSlider";
import { WavyBackground } from "@/components/ui/Wavy";
import { paises } from "@/utils/paises";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Page = () => {
  const { nickname } = useParams();
  const { usuarios } = useUsuarios();
  const [usenarme, setUsername] = useState("");
  const [__id, setId] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [pais, setPais] = useState([]);
  const [beats, setBeats] = useState([]);

  const chargeBeats = async () => {
    const response = await axios.get("/api/user");
    const usuarios_ = response.data.data;
    if (response.data.data) {
      const usuarioEncontrado = usuarios_.find(
        (u) => u.username.toLowerCase() === nickname.toLowerCase()
      );
      console.log(usuarioEncontrado.username);
      if (usuarioEncontrado) {
        const pais_ = paises.filter((e) => e.code == usuarioEncontrado.pais);
        setUsername(usuarioEncontrado.username);
        setColors(usuarioEncontrado.colors || []);
        setGeneros(usuarioEncontrado.generos || []);
        setImages(usuarioEncontrado.imagenes || []);
        setId(usuarioEncontrado._id || []);

        setDescripcion(usuarioEncontrado.descripcion);
        setProfileImg(usuarioEncontrado.profileimg);
        setPais(pais_[0].emoji || []);
      }
    }
    const data = await axios.get("/api/beats");
    setBeats(data.data.data.filter((e) => e.autor == __id));
    console.log(data);
  };

  useEffect(() => {
    chargeBeats();
  }, []);

  useEffect(() => {
    // if (usuarios) {
    //   const usuarioEncontrado = usuarios.find((u) => u.username === nickname);
    //   if (usuarioEncontrado) {
    //     const pais_ = paises.filter((e) => e.code == usuarioEncontrado.pais);
    //     setUsername(usuarioEncontrado.username);
    //     setColors(usuarioEncontrado.colors || []);
    //     setGeneros(usuarioEncontrado.generos || []);
    //     setImages(usuarioEncontrado.imagenes || []);
    //     setId(usuarioEncontrado._id || []);

    //     setDescripcion(usuarioEncontrado.descripcion);
    //     setProfileImg(usuarioEncontrado.profileimg);
    //     setPais(pais_[0].emoji || []);
    //   }
    // }
    // console.log(usuarios, nickname);
    chargeBeats();
  }, [usuarios, nickname]);

  return (
    <>
      {colors.length > 1 && (
        <WavyBackground colors={colors} className=" mx-auto pb-40">
          <div className="md:w-[40vw] pd-20  md:fixed  h-fit md:min-h-screen">
            <section className="flex flex-col items-center">
              <div className="w-full flex justify-center pt-20">
                <div className="w-[100px] h-[100px] rounded-full ">
                  <img
                    src={`${profileImg}`}
                    className="h-full w-full rounded-full"
                    alt=""
                  />
                </div>
              </div>

              <p className="text-4xl mt-5 font-semibold  flex items-center">
                {usenarme} {pais}
              </p>

              <div className="flex justify-center  flex-wrap w-8/12">
                {generos.map((e) => (
                  <span
                    key={e}
                    className="text-md mr-2 bg-gray-200 text-black border border-black  p-2  rounded-xl font-bold mt-5"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p
                style={{
                  textShadow:
                    " 1px 1px 2px black,0 0 1em blue, 0 0 0.2em blue;",
                  mixBlendMode: "difference",
                }}
                className="text-center text-xl opacity-[.8] font-bold  degradado-texto w-9/12 md:w-6/12 mt-20 md:mt-10"
              >
                {descripcion}
              </p>
            </section>
            {/* <div className="icons w-full flex   p-5 items-center justify-center">
              <a
                href="#"
                className="icon instagram rounded-full mx-1 bg-black/50"
              >
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
              <a
                href="#"
                className="icon whatsapp rounded-full  mx-1 bg-black/50"
              >
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
            </div> */}
            <div className="w-full flex justify-center mt-5">
              <div className="md:flex w-9/12 grid grid-cols-4 flex-wrap justify-around">
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#000" transform="translate(-340 -7439)">
                          <g transform="translate(56 160)">
                            <path d="M289.87 7279.123c-1.628.073-3.04.471-4.179 1.606-1.143 1.14-1.536 2.557-1.61 4.168-.045 1.005-.313 8.601.463 10.593a5.04 5.04 0 002.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351-1.225-1.222-2.666-2.054-12.382-1.606m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 01-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985.995-.992 2.28-1.479 11.034-1.084 1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224m8.139-13.377c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 00-2.39 0m-9.226 5.298a5.103 5.103 0 005.11 5.097 5.103 5.103 0 005.109-5.097 5.102 5.102 0 00-5.11-5.096 5.102 5.102 0 00-5.11 5.096m1.794 0a3.313 3.313 0 013.316-3.308 3.313 3.313 0 013.317 3.308 3.313 3.313 0 01-3.317 3.31 3.313 3.313 0 01-3.316-3.31"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -3 20 20"
                  >
                    <g>
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#000" transform="translate(-300 -7442)">
                          <g transform="translate(56 160)">
                            <path d="M251.988 7291.586v-5.612c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673-1.611 1.495-1.106 9.518-.718 10.817.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 001.39-.712c1.49-1.49 1.388-9.962.195-11.841"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0F0F0F"
                      fillRule="evenodd"
                      d="M20 1a3 3 0 013 3v16a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h16zm0 2a1 1 0 011 1v16a1 1 0 01-1 1h-5v-7h2.076a1 1 0 00.949-.684l.443-1.329a.75.75 0 00-.712-.987H15V9c0-.5.5-1 1-1h2a1 1 0 001-1v-.686a.71.71 0 00-.519-.695C17.171 5.273 16 5.273 16 5.273c-2.5 0-4 1.727-4 3.227V11h-2a1 1 0 00-1 1v1a1 1 0 001 1h2v7H4a1 1 0 01-1-1V4a1 1 0 011-1h16z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 002.189 5.213l-.002-.002A8.77 8.77 0 0029 8.45l.028.002v5.036a13.327 13.327 0 01-5.331-1.247l.082.034a15.385 15.385 0 01-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 01-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 01-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 01-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 00-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 004.382 3.586h-.009a4.198 4.198 0 003.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <img src="/x.png" width={30} />
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g clipPath="url(#clip0_1_1825)">
                        <g>
                          <path
                            fill="#000"
                            d="M7.8 12h-.75.75zm8.4 0h.75-.75zM12 16.2v.75-.75zm2.173 6.075l.154.734-.154-.734zm-4.346 0l-.154.734.154-.734zM2.276 8.032L1.58 7.75l.695.283zm-.55 6.14l-.735.155.734-.154zM9.826 1.726L9.673.991l.154.734zm4.346 0l.154-.734-.154.734zM21.64 8.07l.218.718-.218-.718zm-19.281 0l-.218.717.218-.717zm18.672.248A9.719 9.719 0 0121.75 12h1.5a11.22 11.22 0 00-.83-4.248l-1.389.567zM21.75 12c0 .693-.072 1.368-.209 2.018l1.468.31c.158-.752.241-1.53.241-2.328h-1.5zm-.209 2.018a9.763 9.763 0 01-7.523 7.523l.31 1.468a11.263 11.263 0 008.68-8.682l-1.467-.309zm-7.523 7.523A9.794 9.794 0 0112 21.75v1.5c.797 0 1.576-.083 2.327-.241l-.309-1.468zM12 21.75a9.794 9.794 0 01-2.018-.209l-.31 1.468c.752.158 1.53.241 2.328.241v-1.5zM2.25 12a9.72 9.72 0 01.72-3.684L1.58 7.749A11.22 11.22 0 00.75 12h1.5zm7.732 9.541a9.763 9.763 0 01-7.523-7.523l-1.468.31a11.263 11.263 0 008.682 8.68l.309-1.467zm-7.523-7.523A9.794 9.794 0 012.25 12H.75c0 .797.083 1.576.241 2.327l1.468-.309zm.51-5.702a9.77 9.77 0 017.013-5.857L9.672.991a11.27 11.27 0 00-8.09 6.758l1.388.567zm7.013-5.857A9.794 9.794 0 0112 2.25V.75c-.797 0-1.576.083-2.327.241l.309 1.468zM12 2.25c.693 0 1.368.072 2.018.209l.31-1.468A11.294 11.294 0 0012 .75v1.5zm2.018.209a9.77 9.77 0 017.013 5.86l1.389-.567a11.27 11.27 0 00-8.093-6.76l-.309 1.467zm-.56-.506c.29.908 1.364 4.403 1.803 7.615l1.487-.203c-.459-3.348-1.567-6.947-1.86-7.868l-1.43.456zm1.803 7.615c.119.861.189 1.689.189 2.432h1.5c0-.832-.078-1.731-.202-2.635l-1.487.203zm6.161-2.216c-1.153.35-3.319.964-5.554 1.377l.273 1.475c2.314-.427 4.54-1.06 5.717-1.416l-.436-1.436zM15.868 8.73c-1.355.25-2.71.421-3.868.421v1.5c1.287 0 2.743-.188 4.14-.446l-.272-1.475zM15.45 12c0 1.1-.155 2.38-.385 3.671l1.476.264c.239-1.333.409-2.71.409-3.935h-1.5zm-.385 3.671c-.506 2.828-1.355 5.588-1.607 6.376l1.43.456c.257-.807 1.13-3.642 1.653-6.568l-1.476-.264zm6.982-2.213c-.788.252-3.548 1.101-6.376 1.607l.264 1.476c2.926-.523 5.76-1.396 6.568-1.654l-.456-1.429zm-6.376 1.607c-1.29.23-2.57.385-3.671.385v1.5c1.225 0 2.602-.17 3.935-.409l-.264-1.476zM12 15.45c-1.1 0-2.38-.155-3.671-.385l-.264 1.476c1.333.239 2.71.409 3.935.409v-1.5zm-3.671-.385c-2.828-.506-5.588-1.355-6.376-1.607l-.456 1.43c.807.257 3.642 1.13 6.568 1.653l.264-1.476zM7.05 12c0 1.225.17 2.602.409 3.935l1.476-.264c-.23-1.29-.385-2.57-.385-3.671h-1.5zm.409 3.935c.523 2.926 1.396 5.76 1.654 6.568l1.429-.456c-.252-.788-1.101-3.548-1.607-6.376l-1.476.264zM9.113 1.497c-.294.921-1.402 4.52-1.86 7.868l1.485.203c.44-3.212 1.514-6.707 1.804-7.615l-1.43-.456zm-1.86 7.868A19.75 19.75 0 007.05 12h1.5c0-.743.07-1.57.188-2.432l-1.486-.203zM12 9.15c-1.158 0-2.513-.171-3.868-.421l-.273 1.475c1.398.258 2.854.446 4.141.446v-1.5zm-3.868-.421c-2.236-.413-4.403-1.027-5.555-1.377L2.14 8.787c1.176.357 3.404.99 5.718 1.417l.273-1.475zm13.248-1.36a.251.251 0 01.042-.017l.436 1.436c.075-.023.146-.052.213-.087l-.691-1.332zM1.884 8.672c.08.048.165.087.257.115l.436-1.435c.033.01.063.024.09.04l-.783 1.28z"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1825">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <g>
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g fill="#000" transform="translate(-140 -7479)">
                          <g transform="translate(56 160)">
                            <path d="M99.915 7327.865c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 01-.543-1.79c3.533-1.073 9.405-.866 13.116 1.337a.935.935 0 01-.955 1.609zm-.105 2.835a.78.78 0 01-1.073.257c-2.687-1.652-6.785-2.13-9.964-1.165a.78.78 0 01-.453-1.492c3.631-1.102 8.146-.568 11.233 1.329a.779.779 0 01.257 1.071zm-1.224 2.723a.623.623 0 01-.857.207c-2.348-1.435-5.304-1.759-8.785-.964a.622.622 0 11-.277-1.215c3.809-.871 7.076-.496 9.712 1.115.294.18.387.563.207.857zM94 7319c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c0-5.522-4.477-9.999-10-9.999V7319z"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="w-fit rounded-full border-black  p-2 border-2">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 6.124l.001-.097c0-.743-.088-1.465-.253-2.156l.013.063A4.942 4.942 0 0021.598.903l-.02-.012a4.956 4.956 0 00-1.847-.723l-.03-.004a10.14 10.14 0 00-1.553-.15h-.011c-.04 0-.083-.01-.124-.013H5.988c-.152.01-.3.017-.455.026a6.96 6.96 0 00-2.242.415L3.34.427A5.033 5.033 0 00.487 3.175l-.012.033c-.17.409-.297.885-.36 1.38l-.003.028c-.051.343-.087.751-.1 1.165v.016c0 .032-.007.062-.01.093v12.224c.01.14.017.283.027.424.02.861.202 1.673.516 2.416l-.016-.043a5.01 5.01 0 003.199 2.792l.035.009c.377.111.817.192 1.271.227l.022.001c.555.053 1.11.06 1.667.06h11.028c.554 0 1.099-.037 1.633-.107l-.063.007a5.319 5.319 0 002.321-.823l-.021.013a5.078 5.078 0 001.867-2.176l.013-.032c.166-.383.295-.829.366-1.293l.004-.031a11.897 11.897 0 00.129-2.05V6.127zm-6.424 3.99v5.712l.001.083c0 .407-.09.794-.252 1.14l.007-.017a2.13 2.13 0 01-1.373 1.137l-.015.003a4.483 4.483 0 01-1.06.173h-.01c-.029.002-.062.002-.096.002a1.871 1.871 0 01-.815-3.556l.011-.005c.293-.14.635-.252.991-.32l.027-.004c.378-.082.758-.153 1.134-.24a.621.621 0 00.51-.513v-.003a.863.863 0 00.02-.189v-.005-5.443a.739.739 0 00-.027-.19l.001.005a.29.29 0 00-.301-.234h.001c-.178.013-.34.036-.499.07l.024-.004q-1.14.225-2.28.456l-3.7.748c-.016 0-.032.01-.048.013a.452.452 0 00-.39.492v-.002 7.931l.001.095c0 .408-.079.797-.224 1.152l.007-.021a2.138 2.138 0 01-1.436 1.235l-.015.003a4.307 4.307 0 01-1.067.172h-.008a1.84 1.84 0 01-1.919-1.533l-.001-.011a1.867 1.867 0 011.141-2.071l.013-.004a5.678 5.678 0 011.072-.305l.036-.005c.287-.06.575-.116.86-.177a.7.7 0 00.6-.693v-.022.001-.15-8.883-.007c0-.129.015-.254.044-.374l-.002.011a.696.696 0 01.542-.517l.004-.001c.255-.066.515-.112.774-.165.733-.15 1.466-.3 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.4.181-.042.407-.079.637-.104l.027-.002a.493.493 0 01.554.481c.008.067.012.144.012.222V10.11z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen  mt-0 md:pt-20 w-screen  flex">
            <div className="md:w-[40vw] "></div>
            <div className="flex-1 flex justify-start   flex-col">
              <div className="w-12/12 md:w-10/12   h-fit grid  grid-cols-1 md:grid-cols-2">
                <div className="w-full flex justify-center items-center">
                  <div className="h-full bg-white md:bg-slate-200/20 mr-0 mt-10 md:mt-0 md:mr-1 rounded-xl w-11/12 md:w-[100%]  ">
                    <SliderFlipComponent imgs={images} />
                  </div>
                </div>
                <div className=" flex h-full flex-col md:mt-0 my-0 md:my-10 py-5  items-center ml-0 md:ml-1 justify-center  bg-slate-800/50 rounded-xl w-[100%]  ">
                  <p className="text-center font-sans text-black font-extrabold text-5xl">
                    Contacto
                  </p>

                  <div className="flex justify-center w-full mt-10 h-2/6">
                    <textarea
                      className="w-10/12  rounded-xl  border-2 px-2 py-5 md:py-0 pt-1 "
                      placeholder="Hola! Me interesaria coordinar una llamada..."
                    />
                  </div>
                  <button className="border-2 mt-5 flex items-center hover:opacity-[0.7] transition-all duration-500 bg-black text-white text-xl rounded-xl px-2 py-1  ">
                    <svg
                      className="mr-2"
                      width={35}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.5 12H5.42m-.173.797L4.242 15.8c-.55 1.643-.826 2.465-.628 2.971.171.44.54.773.994.9.523.146 1.314-.21 2.894-.92l10.135-4.561c1.543-.695 2.314-1.042 2.553-1.524a1.5 1.5 0 000-1.33c-.239-.482-1.01-.83-2.553-1.524L7.485 5.243c-1.576-.71-2.364-1.064-2.887-.918a1.5 1.5 0 00-.994.897c-.198.505.074 1.325.618 2.966l1.026 3.091c.094.282.14.423.159.567a1.5 1.5 0 010 .385c-.02.144-.066.285-.16.566z"
                      ></path>
                    </svg>
                    Enviar
                  </button>
                </div>
              </div>

              <div className="mt-5 w-full md:w-10/12 ">
                <BackgroundGradient className="rounded-[22px]   ">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {beats.map((e) => (
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
                    ))}
                  </div>
                </BackgroundGradient>
              </div>
            </div>
          </div>
        </WavyBackground>
      )}
    </>
  );
};

export default Page;
