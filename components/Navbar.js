"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import useUsuarios from "@/app/hook/useUsers";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const { push } = useRouter();
  const { user, logout, loginWithRedirect } = useAuth0();
  const { usuario } = useUsuarios();
  // const [usuario_, setUsuario_] = useState();
  const pillTabs = user
    ? ["Home", "Conocenos", , "Comunidad"]
    : ["Home", "Conocenos", "Comunidad"];

  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <button
        className="p-2  border-2 text-black  font-extralight  text-xl font-sans rounded-full bg-white"
        onClick={() =>
          (text == "Home" && push("/")) ||
          (text == "Beats" && push("#")) ||
          (text == "Tu música" && push("/upload")) ||
          (text == "Comunidad" && push("/comunidad")) ||
          (text == "Modifica tu perfil" && push(`/create/${usuario.username}`))
        }
        key={text}
        onMouseEnter={() => setHoveredIndex(i)}
        style={{
          position: "relative",
          borderRadius: "999px",
        }}
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span
              style={{
                borderRadius: "999px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "violet",
                padding: 2,
                opacity: 0.2,
              }}
            />
          </MagicTabSelect>
        )}
        {text}
      </button>
    );
  });

  return (
    <nav
      style={{ backdropFilter: "blur(4px) ", zIndex: 1000 }}
      className="   h-[7vh]  flex items-center  w-screen   pt-5 absolute indexz inset-0"
    >
      <div className="flex rounded-full">
        <img src="/logo.png" alt="" style={{ height: "70px" }} />
      </div>

      <div
        style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}
        className=""
      >
        {tabsComponents}
      </div>

      <div className="flex-1"></div>
      <div className="flex items-center mx-5">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex justify-center items-center flex-col">
                <svg
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fixed bottom-6  "
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffc600"
                    d="M21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a.992.992 0 00-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 01-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 00-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21 1.183-1.21 1.371-3.216 1.749-7.228z"
                  ></path>
                </svg>
                <img
                  src={user.picture}
                  onClick={() => {
                    push(`/perfil/${usuario.username}`);
                  }}
                  className="cursor-pointer rounded-full  shadow-md shadow-fuchsia-900  w-[50px]"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Editar Perfil</DropdownMenuItem>
              <DropdownMenuItem>Ver perfil</DropdownMenuItem>
              <DropdownMenuItem>Tu musica</DropdownMenuItem>
              <DropdownMenuItem>Suscripción</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      {user ? (
        <div className="flex  " onClick={() => logout()}>
          <div className="mr-5 transition-all hover:scale-150 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-[35px]"
            >
              <g
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M12 12h7m0 0l-3 3m3-3l-3-3M19 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-1"></path>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex " onClick={() => loginWithRedirect()}>
          <div className="mr-5 transition-all hover:scale-150 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-[35px]"
            >
              <g stroke="#000" strokeLinecap="round" strokeWidth="1.5">
                <path d="M8 16c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121-.768.769-1.946.865-4.121.877M3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"></path>
                <path
                  strokeLinejoin="round"
                  d="M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};
