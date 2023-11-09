import Figma from "../assets/Figma";
import React from "../assets/React";
import Tailwind from "../assets/Tailwind";
import Wordpress from "../assets/Wordpress";
import HeroImg from "../assets/fasha-image.svg";
import Peace from "../assets/Peace";
import Smile from "../assets/Smile";

import { Tooltip } from "react-tooltip";
export default function Hero() {
  const toolTipStyle = {
    color: "white",
    backgroundColor: "#0284c7",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 600,
  };
  return (
    <div className="bg-emerald-700 pb-20 pt-10">
      <div className="max-w-4xl relative m-auto text-center space-y-8 ">
        <Smile className="absolute animate-spin-slow top-16  right-10" />
        <h1 className="text-emerald-50 z-50 text-7xl font-secondary leading-tight font-normal">
          The Man Between FE Dev and UI Designer.
        </h1>
        <p className="md:max-w-3xl m-auto text-xl font-light text-emerald-50 ">
          Hi! I’m <spa className="font-bold">Fasha</spa> If you're looking for a{" "}
          <span className="font-bold">designer</span> who has strong skills in
          both <span className="font-bold">design</span> and{" "}
          <span className="font-bold">coding</span>, you have come to the right
          place. Feel free to explore my work below.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            className="font-bold transition-all hover:opacity-80 px-8 py-3 bg-emerald-50 text-emerald-600"
            href=""
          >
            Resume
          </a>
          <a
            className="font-bold transition-all hover:opacity-80 px-8 py-3 bg-transparent border border-emerald-50 text-emerald-50"
            href=""
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
