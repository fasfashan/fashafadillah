import Tailwind from "../assets/Tailwind";
import React from "../assets/React";
import Wordpress from "../assets/Wordpress";
import Figma from "../assets/Figma";
import Tabs from "./Tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-rose-100 to-teal-100 grid-cols-2"
    >
      <div className="grid gap-4 grid-cols-12 m-auto  p-5 md:max-w-6xl  xl:max-w-7xl">
        <div
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="md:py-20 py-10 md:col-span-6 md:border-r border-0 border-neutral-400 md:px-6 col-span-12 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-secondary text-neutral-900 text-3xl">
              About Fasha
            </h3>

            <p className="text-neutral-500  md:leading-loose leading-loose text-lg ">
              Started my career as a graphic designer, my interest in technology
              led me to become a{" "}
              <span className="font-semibold text-neutral-900">
                web designer
              </span>
              , and now I am preparing to become a{" "}
              <span className="font-semibold text-neutral-900">
                UI Engineer
              </span>{" "}
              . Deciding to become a UI Engineer is because I love both things:
              design and code.{" "}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-neutral-500">
              Current Favorit tech stack
            </p>
            <div className="flex rounded-lg p-3 border border-neutral-400 w-fit gap-6">
              <React />
              <Wordpress />
              <Tailwind />
              <Figma />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="md:py-20 py-10 md:col-span-6 md:px-6  col-span-12 space-y-6"
        >
          <h3 className="font-secondary text-3xl text-neutral-900">Work</h3>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
