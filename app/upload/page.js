"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import useUsuarios from "../hook/useUsers";
import { ReproductorComponent } from "@/components/cards/reproductorCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useLicenses from "../hook/useLicenses";
import { BeatForm } from "@/components/Forms/Beats";
import { LincenseForm } from "@/components/Forms/Licences";

const Page = () => {
  const { licencias } = useLicenses();

  const { user } = useAuth0();
  const { usuarios } = useUsuarios();
  const [beats, setBeats] = useState([]);
  const [usuario, setUsuario] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [isBeatUpdate, setIsBeatUpdate] = useState(false);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [nombreLincencia, setNombreLicencia] = useState();
  const [precioLicencia, setPrecioLicencia] = useState();
  const chargeBeats = async () => {
    const data = await axios.get("/api/beats");
    data && setBeats(data.data.data.filter((e) => e.autor == usuario._id));
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
  const setParamsLicense = (e) => {
    setNombreLicencia(e.titulo);
    setPrecioLicencia(e.precio);
  };

  const actualizarDatosBeat = async (beat) => {
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
    <div className="min-h-screen max-w-screen  bg-slate-200  py-28">
      <div className="flex justify-center">
        <Tabs defaultValue="beats" className="w-[500px] bg-white rounded-xl p-3 h-screen">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="crearbeats">Subir Beat</TabsTrigger>
            <TabsTrigger value="beats">Beats</TabsTrigger>
          </TabsList>

          <TabsContent value="crearbeats">
            {usuario && <BeatForm autor={usuario._id} />}
          </TabsContent>
          <TabsContent value="beats">
            <div>
              <Table className="w-full ">
                <TableHeader className="w-full ">
                  <TableRow className="w-[500px]">
                    <TableHead className="w-[100px]">Nombre</TableHead>
                    <TableHead className="">Precio</TableHead>
                    <TableHead className=""></TableHead>
                    <TableHead className=""></TableHead>
                  </TableRow>
                </TableHeader>
                {beats.length >= 1 &&
                  beats.map((e, index) => (
                    <TableBody key={e._id}>
                      <TableRow>
                        <TableCell className="font-medium">
                          {e.nombre}
                        </TableCell>
                        <TableCell className="text-right">
                          ${e.precio}
                        </TableCell>
                        <TableCell className="text-right">
                          {" "}
                          <DropdownMenu onOpenChange={() => setParams(e)}>
                            <DropdownMenuTrigger>
                              {" "}
                              <svg
                                className="ml-5 md:mt-0 mt-2 cursor-pointer hover:scale-[1.2] hover:opacity-[.5]"
                                width={35}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="#000"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                >
                                  <path d="M21.28 6.4l-9.54 9.54c-.95.95-3.77 1.39-4.4.76-.63-.63-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 113.64 3.65v0z"></path>
                                  <path d="M11 4H6a4 4 0 00-4 4v10a4 4 0 004 4h11c2.21 0 3-1.8 3-4v-5"></path>
                                </g>
                              </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuLabel>Nombre</DropdownMenuLabel>
                              <input
                                value={nombre}
                                className="border-2 p-2 rounded-xl"
                                onChange={(event) =>
                                  setNombre(event.target.value)
                                }
                                placeholder={e.nombre}
                              />
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Precio</DropdownMenuLabel>
                              <input
                                className="border-2 p-2 rounded-xl"
                                value={precio}
                                type="number"
                                onChange={(event) =>
                                  setPrecio(event.target.value)
                                }
                                placeholder={e.precio}
                              />
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Licencias</DropdownMenuLabel>

                              {e.licenses.map((l, index) => (
                                <DropdownMenu key={index}>
                                  <DropdownMenuTrigger>
                                    <div className="flex flex-col items-start ">
                                      <button className=" bg-black rounded-xl  text-white cursor-pointer m-1 p-2">
                                        {l.titulo}
                                      </button>
                                    </div>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                      Nombre
                                    </DropdownMenuLabel>
                                    <input
                                      value={l.titulo}
                                      className="border-2 p-2 rounded-xl"
                                      // onChange={(event) =>
                                      //   setNombre(event.target.value)
                                      // }
                                      placeholder={e.nombre}
                                    />
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel>
                                      Precio
                                    </DropdownMenuLabel>
                                    <input
                                      className="border-2 p-2 rounded-xl"
                                      value={l.precio}
                                      type="number"
                                      // onChange={(event) =>
                                      //   setPrecio(event.target.value)
                                      // }
                                      placeholder={l.precio}
                                    />
                                    <DropdownMenuLabel>
                                      Descripción
                                    </DropdownMenuLabel>
                                    <input
                                      className="border-2 p-2 rounded-xl"
                                      value={l.descripcion}
                                      type="number"
                                      // onChange={(event) =>
                                      //   setPrecio(event.target.value)
                                      // }
                                      placeholder={l.descripcion}
                                    />
                                    <DropdownMenuLabel>
                                      Formatos
                                    </DropdownMenuLabel>
                                    <input
                                      className="border-2 p-2 rounded-xl"
                                      value={l.formatos}
                                      type="number"
                                      // onChange={(event) =>
                                      //   setPrecio(event.target.value)
                                      // }
                                      placeholder={l.formatos}
                                    />
                                    <DropdownMenuSeparator />
                                    <button
                                      onClick={() => actualizarDatosBeat(e)}
                                      className="bg-black text-white  px-2 py-1 rounded-xl m-2"
                                    >
                                      Enviar
                                    </button>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              ))}

                              <DropdownMenuSeparator className="my-5" />
                              <button
                                onClick={() => actualizarDatosBeat(e)}
                                className="bg-black text-white  px-2 py-1 rounded-xl m-2"
                              >
                                Enviar
                              </button>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                        <TableCell className="text-right">
                          {" "}
                          <AlertDialog className="">
                            <AlertDialogTrigger asChild>
                              <button variant="outline">
                                {" "}
                                <svg
                                  className="ml-5 md:mt-0 mt-2 cursor-pointer hover:scale-[1.2] hover:opacity-[.5]"
                                  width={35}
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
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  ¿Estás seguro?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  La decision de eliminar el beat será
                                  permanente.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction>
                                  <span onClick={() => onDeleteBeat(e)}>
                                    {" "}
                                    Continuar
                                  </span>
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
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
          <AlertTitle>ctualizado con éxito</AlertTitle>
          <AlertDescription>¡Gracias por confiar en nosotros!</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Page;
