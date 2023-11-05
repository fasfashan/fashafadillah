import Figma from "../assets/Figma";
import React from "../assets/React";
import Tailwind from "../assets/Tailwind";
import Wordpress from "../assets/Wordpress";
import HeroImg from "../assets/fasha-image.svg";

import { Tooltip } from "react-tooltip";
export default function Hero() {
  const toolTipStyle = {
    color: "white",
    backgroundColor: "#0284c7",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
  };
  return (
    <div className="mt-10 items-center grid grid-cols-12 gap-x-4 gap-y-10">
      <div className="md:col-span-8 col-span-12 space-y-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="animate-pulse"
          >
            <circle cx="8" cy="8" r="8" fill="#3CCB7F" />
            <circle cx="8" cy="8" r="5.5" stroke="#099250" />
          </svg>
          <p className="text-sm text-neutral-400">Available for New Project</p>
        </div>

        <h1 className="md:text-5xl text-4xl font-semibold leading-snug">
          Passionate About Code and Design.
        </h1>

        <p className="text-neutral-400 text-lg">
          Hi! I'm Fasha. If you're looking for a{" "}
          <span className="text-white font-medium">designer</span> who has
          strong skills in both{" "}
          <span className="text-white font-medium">design</span> and{" "}
          <span className="text-white font-medium">coding</span>, you have come
          to the right place. Feel free to explore my work below.
        </p>
        <div className="space-y-3">
          <p className="text-sm text-sky-500 font-semibold">
            Current tech-stack:
          </p>
          <div className="flex bg-secondary px-6 py-3 gap-6 border rounded-lg border-gray w-fit">
            <Tooltip style={toolTipStyle} id="reactJS" />
            <React
              dataToolTipContent="React for Front-end"
              dataToolTipId="reactJS"
            />
            <Tooltip style={toolTipStyle} id="tailwindCSS" />
            <Tailwind
              dataToolTipContent="Tailwind for Styling "
              dataToolTipId="tailwindCSS"
            />
            <Tooltip style={toolTipStyle} id="figma" />
            <Figma
              dataToolTipContent="Figma for Design"
              dataToolTipId="figma"
            />
            <Tooltip style={toolTipStyle} id="wordpress" />
            <Wordpress
              dataToolTipContent="WordPress for CMS"
              dataToolTipId="wordpress"
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-4 col-span-12">
        <img className="w-full" src={HeroImg} alt="Avatar Fasha" />
      </div>
    </div>
  );
}
