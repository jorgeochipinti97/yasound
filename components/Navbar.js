"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = ["Home", "Comunidad", "Conocenos"];
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import useUsuarios from "@/app/hook/useUsers";

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const { push } = useRouter();
  const { user, logout, loginWithRedirect } = useAuth0();
  const { usuarios, isLoading, isError } = useUsuarios();

  useEffect(() => {
    console.log(usuarios);
  }, [isLoading]);

  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <button
        className="p-2 text-xs border-2 text-black  font-semibold  rounded-full bg-white"
        onClick={() =>
          (text == "Home" && push("/")) ||
          (text == "Beats" && push("/beats")) ||
          (text == "Comunidad" && push("/comunidad"))
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
                opacity: 0.5,
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
      style={{ backdropFilter: "blur(4px)" }}
      className="  h-fit  flex items-center fixed w-screen  z-50"
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
        {user && <p> Hola! {user.name}</p>}
      </div>
      {user ? (
        <div className="flex " onClick={() => logout()}>
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
