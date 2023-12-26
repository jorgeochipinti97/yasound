"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = ["Home", "Beats", "Comunidad", "Conocenos"];

export const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const router = useRouter();
  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <button
        onClick={() =>
          (text == "Home" && router.push("/")) ||
          (text == "Beats" && router.push("/beats"))||
          (text == "Comunidad" && router.push("/comunidad"))
        }
        key={text}
        onMouseEnter={() => setHoveredIndex(i)}
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          backgroundColor: "black",
          color: "white",
          border: 0,
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
                mixBlendMode: "multiply",
              }}
            />
          </MagicTabSelect>
        )}
        {text}
      </button>
    );
  });

  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
};
