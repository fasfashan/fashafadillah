/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Fasha from "../../assets/images/fasha.jpg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CSS,
  Figma,
  Tailwind,
  HTML,
  Javascript,
  VScode,
} from "../../assets/icons";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-4">
      <div className="grid gap-10 items-stretch max-w-6xl p-5 m-auto lg:grid-cols-4">
        <div className="bg-secondary flex items-center shadow-xs py-4 md:col-span-1 px-6 border border-grey rounded-lg">
          <p className=" text-paragraf">
            Hello, I'm Fasha—a designer who weaves creativity with code. Explore
            my work below and let's bring your ideas to life!
          </p>
        </div>
        <div className="md:col-span-3 space-y-6">
          <h1 className="lg:text-6xl xl:text-7xl font-medium  text-4xl">
            Senior Web Designer with 3+{" "}
            <span className="text-primary">years of experience.</span>
          </h1>
          <div className="flex font-medium items-center gap-4">
            <a
              className="bg-primary hover:bg-opacity-90 rounded-lg text-white shadow-xs px-4 py-2"
              href="mailto:pasapadilah1410@gmail.com"
            >
              Get in touch
            </a>
            <a
              className="bg-white hover:bg-neutral-50 rounded-lg text-black border border-grey shadow-sm px-4 py-2"
              href="#selected-work"
            >
              Selected Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
