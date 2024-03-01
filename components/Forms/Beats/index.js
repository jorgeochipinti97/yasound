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
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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

  const removeLicense = (indexToRemove) => {
    licenses.length > 1 &&
      setLicenses(licenses.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nombre || !precio || !genero || !image || !mp3Link || !wavLink) {
      alert("Todos los campos son requeridos.");
      return;
    }
    const data = await axios.post("/api/beats", {
      nombre: nombre,
      precio: precio,
      genero: genero,
      image: image,
      linkmp3: mp3Link,
      linkwav: wavLink,
      autor: autor,
      licenses: licenses,
    });

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-5">
      <p className="mt-10 font-bold font-geist text-4xl  tracking-tighter ">
        Información
      </p>

      <div>
        <Input
          type="text"
          className="my-2"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="number"
          className="my-2"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <Separator className="my-5" />

      <p className="font-bold font-geist text-4xl  tracking-tighter ">Música</p>

      <div>
        <div className="mt-2 flex justify-start flex-wrap">
          <div className="flex">
            <div className="border-2 rounded-xl border-black">
              <Select
                onValueChange={(value) => handleSelectChange(value)}
                defaultValue={""}
              >
                <SelectTrigger className="w-[200px]">
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
      <div class="my-2">
        {image < 4 ? (
          <div>
            <Button type="button" onClick={() => refImage.current.click()}>
              Subir Imagen
            </Button>
            <Input
              type="file"
              className="hidden"
              ref={refImage}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        ) : (
          <span>Imagen subida exitosamente</span>
        )}
      </div>
      <div class="my-2">
        {mp3Link.length < 4 ? (
          <div>
            <Button type="button" onClick={() => refAudio.current.click()}>
              Subir Audio MP3
            </Button>
            <Input
              type="file"
              className="hidden"
              ref={refAudio}
              accept="audio/mp3"
              onChange={handleMp3Upload}
            />
          </div>
        ) : (
          <>Mp3 subido exisotsamente</>
        )}
      </div>
      <div class="my-2">
        {wavLink.length < 4 ? (
          <div>
            <Button type="button" onClick={() => refAudioWav.current.click()}>
              Subir Audio WAV
            </Button>
            <Input
              type="file"
              className="hidden"
              ref={refAudioWav}
              accept="audio/mp3"
              onChange={handlewavUpload}
            />
          </div>
        ) : (
          <>Wav subido exisotsamente</>
        )}
      </div>
      <Separator className="my-5" />

      <p className="font-bold font-geist text-4xl  tracking-tighter ">
        Licencias
      </p>
      {licenses.map((license, index) => (
        <div key={index} className="flex flex-col ">
          <Input
            type="text"
            name="titulo"
            value={license.titulo}
            className="my-2"
            onChange={(e) => handleLicenseChange(e, index)}
            placeholder="Titulo"
          />
          <Input
            type="number"
            name="precio"
            className="my-2"
            value={license.precio}
            placeholder="Precio de Licencia"
            onChange={(e) => handleLicenseChange(e, index)}
          />

          <Input
            type="text"
            className="my-2"
            name="descripcion"
            placeholder="Descripción"
            value={license.descripcion}
            onChange={(e) => handleLicenseChange(e, index)}
          />
          <Input
            className="my-2"
            placeholder="Formatos"
            type="text"
            name="formatos"
            value={license.formatos}
            onChange={(e) => handleLicenseChange(e, index)}
          />
          <div
            className="flex justify-end"
            style={{ display: licenses.length > 1 ? "auto" : "none" }}
          >
            <Button
              variant="destructive"
              type="button"
              onClick={() => removeLicense(index)} // Llama a removeLicense con el índice de la licencia
              className="my-2"
            >
              Eliminar Licencia
            </Button>
          </div>
          <Separator className="mb-10" />
        </div>
      ))}
      <div className="">
        <Button type="button" onClick={addLicense}>
          Agregar Licencia
        </Button>
      </div>

      <div className="flex justify-end">
        <Button variant="secondary" className="mt-10" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};
