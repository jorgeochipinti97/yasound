import { CldUploadButton } from "next-cloudinary";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../../alert";

export const FormBeat = () => {
  const { user } = useAuth0();
  const { usuarios } = useUsuarios();
  const [beats, setBeats] = useState([]);
  const [usuario, setUsuario] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [isBeatUpdate, setIsBeatUpdate] = useState(false);
  const [isImageUpload, setIsImageUpload] = useState(false);

  const chargeBeats = async () => {
    const data = await axios.get("/api/beats");
    setBeats(data.data.data.filter((e) => e.autor == usuario.username));
  };
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  useEffect(() => {
    const createuser = usuarios.filter((e) => e.email == user.email);
    createuser && setUsuario(createuser[0]);
  }, [user && usuarios]);

  useEffect(() => {
    usuario && chargeBeats();
  }, [usuario]);

  const setParams = (e) => {
    setPrecio(e.precio);
    setNombre(e.nombre);
  };

  const actualizarDatos = async (beat) => {
    try {
      const response = await axios.put("/api/beats", {
        ...beat,
        precio: precio,
        nombre: nombre,
      });
      response && setMostrarAlerta(true);

      response &&
        setTimeout(() => {
          setMostrarAlerta(false);
        }, 6000);
    } catch (error) {
      console.error("Error al actualizar los datos", error);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const form = {
      link: data.link,
      image: data.image,
      nombre: data.nombre,
      autor: usuario.username,
      precio: parseFloat(data.precio),
    };

    uploadBeat(form);
  };

  const handleUploadBeat = useCallback(async (result) => {
    const newImageUrl = result.info.secure_url;
    setValue("link", newImageUrl);
    newImageUrl && setIsBeatUpdate(true);
  }, []);

  const handleUploadImage = useCallback(async (result) => {
    const newImageUrl = result.info.secure_url;
    newImageUrl && setIsImageUpload(true);

    setValue("image", newImageUrl);
  }, []);

  const uploadBeat = async (formData) => {
    const data = await axios.post("/api/beats", formData);
  };

  const onDeleteBeat = async (e) => {
    try {
      const response = await axios.delete("/api/beats", {
        data: { _id: e._id },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  flex flex-col justify-start items-start"
      >
        <h2 className="text-center text-5xl font-bold font-sans mb-5">
          Nuevo Beat
        </h2>

        <div className="flex flex-col my-2">
          <input
            placeholder="Nombre del Beat"
            className="border-2 border-black p-1 focus:border-2 focus:border-violet-700 transition-all duration-200 rounded-xl "
            {...register("nombre", { required: true })}
          />
          {errors.nombre && <span>Este campo es requerido</span>}
        </div>

        <div className="flex flex-col my-2 items-start  ">
          {isBeatUpdate ? (
            <>
              <p>Beat cargado con éxito</p>
            </>
          ) : (
            <div className="border border-black rounded-xl hover:border-violet-800">
              <CldUploadButton
                onUpload={handleUploadBeat}
                uploadPreset="ml_default"
                className="font-sans flex items-center   hover:bg-gray-100 transition-all duration-300   text-black rounded-xl px-2 py-1 bg-gray-300 "
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
                Subir Beat
              </CldUploadButton>
            </div>
          )}
        </div>

        <div className="flex flex-col my-2 ">
          <input
            placeholder="Precio del Beat"
            className="border-2 border-black p-1 focus:border-2 focus:border-violet-700 transition-all duration-200 rounded-xl "
            type="number"
            {...register("precio", { required: true })}
          />
          {errors.precio && <span>Este campo es requerido</span>}
        </div>

        <div className="flex flex-col my-2 ">
          {isImageUpload ? (
            <>
              <p>Imagen cargada con éxito</p>
            </>
          ) : (
            <div className="border border-black rounded-xl hover:border-violet-800">
              <CldUploadButton
                onUpload={handleUploadImage}
                uploadPreset="ml_default"
                className="font-sans flex items-center   hover:bg-gray-100 transition-all duration-300   text-black rounded-xl px-2 py-1 bg-gray-300 "
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
                Subir imagen
              </CldUploadButton>
              {errors.image && <span>Este campo es requerido</span>}
            </div>
          )}
        </div>

        <div className="my-5">
          <button
            className="border-2 flex items-center hover:opacity-[0.7] transition-all duration-500 bg-black text-white rounded-xl px-2 py-1  "
            type="submit"
          >
            <svg
              className="mr-2"
              width={20}
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
      </form>
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
          <AlertTitle>Beat Actualizado con éxito</AlertTitle>
          <AlertDescription>¡Gracias por confiar en nosotros!</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};
