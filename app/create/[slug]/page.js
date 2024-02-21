"use client";
import { CldUploadButton } from "next-cloudinary";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { paises } from "@/utils/paises";
import useUsuarios from "../../hook/useUsers";
import { useParams, useRouter } from "next/navigation";

import { generosList } from "@/utils/generos";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

const Page = () => {
  const { push } = useRouter();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleSelectChange = (genre) => {
    if (selectedGenres.length >= 5) {
      // Opcional: Mostrar un mensaje de error o advertencia al usuario.
      // alert("No puedes seleccionar más de 5 géneros.");
      return; // Detener la función aquí para no añadir más géneros.
    }

    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const [images, setImages] = useState([]);
  const { slug } = useParams();
  const isCreatingNew = slug == "new";
  const handleUpload = useCallback(async (result) => {
    const newImageUrl = result.info.secure_url;

    setImages((prevImages) => [...prevImages, newImageUrl]);
  }, []);

  const handleRemoveGenre = (indexToRemove) => {
    setSelectedGenres(
      selectedGenres.filter((_, index) => index !== indexToRemove)
    );
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth0();
  const [colors, setColors] = useState([]);
  const [usuario, setUsurio] = useState();

  const [redirect, setRedirect] = useState();
  const { usuarios, isLoading, isError } = useUsuarios();
  useEffect(() => {
    if (!isCreatingNew && usuarios) {
      const usuarioEncontrado = usuarios.find((u) => u.username === slug);
      if (usuarioEncontrado) {
        console.log(usuarioEncontrado);
        setUsurio(usuarioEncontrado._id);
        setRedirect(usuarioEncontrado.username);
        reset({
          username: usuarioEncontrado.username,
          celular: usuarioEncontrado.celular,
          pais: usuarioEncontrado.pais,
          descripcion: usuarioEncontrado.descripcion,
          linkInstagram: usuarioEncontrado.linkInstagram,
          linkFacebook: usuarioEncontrado.linkFacebook,
          linkTikTok: usuarioEncontrado.linkTikTok,
          linkWeb: usuarioEncontrado.linkWeb,
          linkYouTube: usuarioEncontrado.linkYouTube,
          linkTwitter: usuarioEncontrado.linkTwitter,
          linkSpotify: usuarioEncontrado.linkSpotify,
          linkApple: usuarioEncontrado.linkApple,
        });

        setColors(usuarioEncontrado.colors || []);
        setSelectedGenres(usuarioEncontrado.generos || []);
        setImages(usuarioEncontrado.imagenes);
      }
    }
  }, [usuarios, isCreatingNew, slug, reset]);

  const onSubmit = async (data) => {
    const userId = isCreatingNew ? null : usuario;

    const formData = {
      ...data,
      email: user.email,
      generos: selectedGenres,
      colors,
      profileimg: user.picture,
      nombre: user.name,
      imagenes: images,
      ...(userId && { id: userId }),
    };

    const endpoint = isCreatingNew ? "/api/user" : `/api/user`;
    const method = isCreatingNew ? "post" : "put";

    try {
      const response = await axios({
        method: method,
        url: endpoint,
        data: formData,
      });

      const username = watch("username");
      response && setMostrarAlerta(true);
      isCreatingNew && push(`/create/${username}`);
      console.log(isCreatingNew);
      response &&
        setTimeout(() => {
          setMostrarAlerta(false);
        }, 6000);
    } catch (error) {
      console.error(error.response ? error.response.data : error);
    }
  };

  const addColor = () => {
    colors.length < 5 && setColors([...colors, "#fffffff"]);
  };

  const removeColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleColorChange = (color, index) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };
  const removeImage = (urlToRemove) => {
    setImages((prevImages) => prevImages.filter((url) => url !== urlToRemove));
  };
  return (
    <div className="py-20 min-h-screen bg-gray-200">
      <div
        className={`h-fit z-50 w-fit fixed bottom-5 right-5 ${
          mostrarAlerta ? "block" : "hidden"
        }`}
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
          <AlertTitle>Perfil Actualizado con éxito</AlertTitle>
          <AlertDescription>¡Gracias por confiar en nosotros!</AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-center w-screen ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-white p-8 rounded-xl border-2 w-11/12 md:w-6/12 "
        >
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col  h-full  items-center justify-center">
              <div className="w-full justify-start">
                <Label>Nombre de usuario</Label>
                <Input
                  placeholder="Nombre de usuario"
                  className="border p-2  w-fit rounded-xl  focus:border-violet-500 transition-all duration-200"
                  {...register("username", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.username && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col  h-full items-center justify-center">
              <div className="w-full justify-start">
                <Label>Celular</Label>
                <Input
                  placeholder="Celular"
                  className="border p-2  w-fit rounded-xl  focus:border-violet-500 transition-all duration-200"
                  {...register("celular", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.celular && (
                  <span className="text-red-500">{errors.celular.message}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col mt-2 h-full w-12/12  items-center justify-center">
              <div className="w-fit justify-start">
                <Label>País de residencia</Label>
                <select
                  className="border p-2  w-10/12 rounded-xl  focus:border-violet-500 transition-all duration-200"
                  {...register("pais", {
                    required: "Este campo es obligatorio",
                  })}
                >
                  <option value="">Seleccione un país</option>
                  {paises.map((pais) => (
                    <option key={pais.code} value={pais.code}>
                      {pais.country} {pais.emoji}
                    </option>
                  ))}
                </select>
                {errors.pais && (
                  <span className="text-red-500">{errors.pais.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col  h-full  items-center justify-center">
              <div className="flex flex-col items-start justify-start">
                <div className="w-full mt-10 justify-start">
                  <Label className="mt-5">Descripción</Label>

                  <textarea
                    placeholder="Descripción"
                    className=" p-2 border-2 border-200-gray w-full  rounded-xl"
                    {...register("descripcion", {
                      required: "Este campo es obligatorio",
                      maxLength: {
                        value: 180,
                        message:
                          "La descripción no puede superar los 180 caracteres",
                      },
                    })}
                  />
                  {errors.descripcion && (
                    <span className="text-red-500">
                      {errors.descripcion.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col   ">
              <div className="flex flex-col items-start justify-start">
                <Label>Generos </Label>
                <div className="mt-2 flex justify-start flex-wrap  ">
                  <div className="flex ">
                    <select
                      style={{ opacity: selectedGenres.length >= 5 ? 0.2 : 1 }}
                      disabled={selectedGenres.length >= 5 ? true : false}
                      onChange={(e) => handleSelectChange(e.target.value)}
                      className="border-2 border-gray-300 p-2 w-11/12 rounded-lg"
                    >
                      <option value="">Selecciona los géneros</option>
                      {generosList.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex-wrap flex max-w-6/12">
              <ul className="mt-2 flex jusity-around flex-wrap">
                {selectedGenres.map((genre, index) => (
                  <li
                    className="p-1 text-center border-black flex-col justify-center rounded-md w-fit m-1 font-semibold uppercase text-xs flex items-center"
                    key={index}
                  >
                    {genre}
                    <button
                      onClick={() => handleRemoveGenre(index)}
                      className="ml-2 bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mt-10  flex-col w-fit justify-around">
              <div className="flex flex-col   ">
                <label className="mt-5  font-semibold text-xl">
                  Personalizá tus ondas
                </label>
                <p>Máximo 5 </p>

                <div>
                  <button
                    type="button"
                    onClick={addColor}
                    disabled={colors.length == 5 ? true : false}
                    className="px-2 py-1 text-white mt-5 bg-blue-500 rounded hover:bg-blue-700 transition duration-150 ease-in-out"
                  >
                    Agregar Color
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-10 justify-around items-center ">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  flex-col mx-2"
                >
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => handleColorChange(e.target.value, index)}
                    className="h-[30px] w-[30px] rounded cursor-pointer"
                  />
                  <div className="rounded-xl   cursor-pointer hover:scale-[1.1] transition-all duration-400 hover:opacity-[.9] w-fit flex  justify-center">
                    <button
                      className=" bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded"
                      onClick={() => removeColor(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Campos para los links */}
            <div className="flex flex-wrap  justify-center mt-10 ">
              <InputField
                label="Instagram"
                name="linkInstagram"
                register={register}
              />
              <InputField
                label="Facebook"
                name="linkFacebook"
                register={register}
              />
              <InputField
                label="TikTok"
                name="linkTikTok"
                register={register}
              />
              <InputField
                label="YouTube"
                name="linkYouTube"
                register={register}
              />
            </div>

            <div className="flex flex-col justify-center  mt-10">
              <InputField label="Web" name="linkWeb" register={register} />
              <InputField
                label="Twitter"
                name="linkTwitter"
                register={register}
              />
              <InputField
                label="Spotify"
                name="linkSpotify"
                register={register}
              />
              <InputField label="Apple" name="linkApple" register={register} />
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className=" my-2">
              <div className="border-violet-800 border rounded-xl w-fit p-0 hover:border-violet-800">
                <CldUploadButton
                  onUpload={handleUpload}
                  uploadPreset="ml_default"
                  className="font-sans flex items-center   hover:bg-gray-100 transition-all duration-300   text-black rounded-xl p-2 bg-violet-200 "
                >
                  <svg
                    width={20}
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g stroke="#000" strokeLinecap="round" strokeWidth="1.5">
                      <path d="M17 9.002c2.175.012 3.353.109 4.121.877C22 10.758 22 12.172 22 15v1c0 2.829 0 4.243-.879 5.122C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.878C2 20.242 2 18.829 2 16v-1c0-2.828 0-4.242.879-5.121.768-.768 1.946-.865 4.121-.877"></path>
                      <path
                        strokeLinejoin="round"
                        d="M12 15V2m0 0l3 3.5M12 2L9 5.5"
                      ></path>
                    </g>
                  </svg>
                  Sube tus imagenes
                </CldUploadButton>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-5">
              {images.length > 0 &&
                images.map((e) => (
                  <div
                    key={e}
                    className="flex justify-start items-center flex-col border-2 m-2 p-2 rounded-xl"
                  >
                    <img src={e} alt="" width={200} height={200} />

                    <div className="rounded-xl hover:bg-red-200 border-2 mt-5 border-black hover:border-red-500 cursor-pointer hover:scale-[1.1] transition-all duration-400 hover:opacity-[.9] w-fit flex p-1 justify-center">
                      <button
                        className="border-2   rounded-xl"
                        onClick={() => removeImage(e)}
                      >
                        <svg
                          className=" cursor-pointer  "
                          width={25}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M4 7h16M6 7v11a3 3 0 003 3h6a3 3 0 003-3V7M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <button
            type="submit"
            className="px-4 mt-10 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 transition duration-150 ease-in-out"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, register }) => (
  <div className="flex flex-col m-2">
    <label htmlFor={name} className="mb-2 font-semibold">
      {label}
    </label>
    <input
      className="border p-2  w-fit rounded-xl focus:border-violet-500 transition-all duration-400"
      {...register(name)}
    />
  </div>
);

export default Page;
