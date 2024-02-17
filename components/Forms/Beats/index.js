import axios from "axios";
import React, { useRef, useState } from "react";
import { generosList } from "@/utils/generos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
export const BeatForm = ({ autor }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [genero, setGenero] = useState("");
  const [image, setImage] = useState("");
  const [mp3Link, setMp3Link] = useState("");
  const [wavLink, setwavLink] = useState("");
  const refAudio = useRef();
  const refAudioWav = useRef();
  const refImage = useRef();
  const handleSelectChange = (value) => {
    setGenero(value);
  };
  const [licenses, setLicenses] = useState([
    { titulo: "", precio: "", descripcion: "", formatos: "" },
  ]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/duptnofi0/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImage(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleMp3Upload = async (event) => {
    const file = event.target.files[0];

    // Validación del tipo MIME del archivo
    if (file.type !== "audio/mpeg") {
      alert("El archivo debe ser un MP3.");
      return; // Detiene la ejecución si el archivo no es un MP3
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/duptnofi0/raw/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setMp3Link(data.secure_url);
    } catch (error) {
      console.error("Error uploading mp3:", error);
    }
  };
  const handlewavUpload = async (event) => {
    const file = event.target.files[0];

    // Validación del tipo MIME del archivo
    if (file.type !== "audio/wav") {
      alert("El archivo debe ser un MP3.");
      return; // Detiene la ejecución si el archivo no es un MP3
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/duptnofi0/raw/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setwavLink(data.secure_url);
    } catch (error) {
      console.error("Error uploading mp3:", error);
    }
  };

  const handleLicenseChange = (event, index) => {
    const { name, value } = event.target;
    const newLicenses = [...licenses];
    newLicenses[index][name] = value;
    setLicenses(newLicenses);
  };

  const addLicense = () => {
    setLicenses([
      ...licenses,
      { titulo: "", precio: "", descripcion: "", formatos: "" },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await axios.post("/api/beats", {
      nombre,
      precio,
      genero,
      image,
      linkmp3: mp3Link,
      linkwav: wavLink,
      autor,
      licenses,
    });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-5">
      <div>
        <input
          type="text"
          className="border-2 rounded-md my-2 p-1"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          className="border-2 rounded-md my-2 p-1"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mt-2 flex justify-start flex-wrap">
          <div className="flex">
            <div className="mx-2">
              <Select
                onValueChange={(value) => handleSelectChange(value)}
                defaultValue={""}
                className='border-2'
              >
                <SelectTrigger className="w-[180px] my-4">
                  <SelectValue placeholder={`Elige el tuyo `} />
                </SelectTrigger>
                <SelectContent>
                  {generosList.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-slate-200 my-2 p-2 rounded-xl font-bold"
          onClick={() => refImage.current.click()}
        >
          Subir Imagen
        </button>
        <input
          type="file"
          className="hidden"
          ref={refImage}
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <div>
        <button
          className="bg-slate-200 my-2 p-2 rounded-xl font-bold"
          onClick={() => refAudio.current.click()}
        >
          Subir Audio MP3
        </button>
        <input
          type="file"
          className="hidden"
          ref={refAudio}
          accept="audio/mp3"
          onChange={handleMp3Upload}
        />
      </div>
      <div>
        <button
          className="bg-slate-200 my-2 p-2 rounded-xl font-bold"
          onClick={() => refAudioWav.current.click()}
        >
          Subir Audio WAV
        </button>
        <input
          type="file"
          className="hidden"
          ref={refAudioWav}
          accept="audio/mp3"
          onChange={handlewavUpload}
        />
      </div>

      {licenses.map((license, index) => (
        <div key={index} className="flex flex-col">
          <input
            type="text"
            name="titulo"
            value={license.titulo}
            className="border-2 rounded-md my-2 p-1"
            onChange={(e) => handleLicenseChange(e, index)}
            required
            placeholder="Titulo"
          />
          <input
            type="number"
            name="precio"
            className="border-2 rounded-md my-2 p-1"
            value={license.precio}
            placeholder="Precio de Licencia"
            onChange={(e) => handleLicenseChange(e, index)}
            required
          />

          <input
            type="text"
            className="border-2 rounded-md my-2 p-1"
            name="descripcion"
            placeholder="Descripción"
            value={license.descripcion}
            onChange={(e) => handleLicenseChange(e, index)}
            required
          />
          <input
            className="border-2 rounded-md my-2 p-1"
            placeholder="Formatos"
            type="text"
            name="formatos"
            value={license.formatos}
            onChange={(e) => handleLicenseChange(e, index)}
            required
          />
        </div>
      ))}
      <button
        type="button"
        className="bg-slate-200 my-2 p-2 rounded-xl font-bold"
        onClick={addLicense}
      >
        Agregar Licencia
      </button>
      <br />
      <Button
        className="mt-10"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
};
