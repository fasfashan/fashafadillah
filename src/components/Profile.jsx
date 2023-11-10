import Tailwind from "../assets/Tailwind";
import React from "../assets/React";
import Wordpress from "../assets/Wordpress";
import Figma from "../assets/Figma";
import Tabs from "./Tabs";
export default function Profile() {
  return (
    <div className=" bg-emerald-700 grid-cols-2">
      <div className="grid gap-4 grid-cols-12 m-auto  p-4 max-w-6xl">
        <div className="py-20 md:col-span-5 col-span-12 space-y-6">
          <div className="space-y-4">
            <h3 className="font-secondary text-3xl">About Fasha</h3>

            <p className="text-emerald-50 font-light md:leading-relaxed leading-relaxed text-lg md:text-xl">
              Started my career as a graphic designer, my interest in technology
              led me to become a{" "}
              <span className="font-semibold text-white">web designer</span>,
              and now I am preparing to become a{" "}
              <span className="font-semibold text-white">UI Engineer</span> .
              Deciding to become a UI Engineer is because I love both things:
              design and code.{" "}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-gray-300">Current Favorit tech stack</p>
            <div className="flex p-4 border border-emerald-50 w-fit gap-6">
              <React />
              <Wordpress />
              <Tailwind />
              <Figma />
            </div>
          </div>
        </div>
        <div className="py-20 md:col-span-5 md:col-start-8  col-span-12 space-y-6">
          <h3 className="font-secondary text-3xl">Work</h3>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
