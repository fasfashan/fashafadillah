import Tailwind from "../../assets/Tailwind";
import React from "../../assets/React";
import Wordpress from "../../assets/Wordpress";
import Figma from "../../assets/Figma";
import Tabs from "../Tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="grid-cols-2 mt-20">
      <div className="grid gap-4 grid-cols-12 md:max-w-4xl m-auto  p-5  xl:max-w-6xl">
        <div className=" md:col-span-6  col-span-12 space-y-6">
          <div className="space-y-4">
            <h3 className=" text-white font-medium text-3xl">About Fasha</h3>

            <p className="text-neutral-400  md:leading-loose leading-loose text-lg ">
              Started my career as a graphic designer, my interest in technology
              led me to become a web designer, and now I am preparing to become
              a UI Engineer . Deciding to become a UI Engineer is because I love
              both things: design and code.{" "}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-neutral-400">
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

        <div className="md:col-span-6 md:px-6  col-span-12 space-y-6">
          <h3 className="font-medium text-3xl text-white">Experience</h3>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
