/* eslint-disable react/no-unescaped-entities */
import "../../index.css";

import LinkedIn from "../../assets/LinkedIn";
import Github from "../../assets/Github";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header className=" bg-neutral-950">
      <div className="z-10 relative">
        <nav className="py-4  xl:max-w-6xl  md:max-w-4xl  text-emerald-50   p-5  m-auto   flex items-center justify-between  ">
          <div className="flex items-center gap-x-3">
            <a
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-neutral-700 hover:bg-neutral-800 rounded-lg  transition-all"
              href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
            >
              {" "}
              <LinkedIn />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="p-2 border border-neutral-700 hover:bg-neutral-800 rounded-lg  transition-all"
              href="https://github.com/fasfashan"
            >
              <Github />
            </a>
          </div>

          <a
            className="font-semibold transition-all rounded-md  px-5 py-2  bg-btn btn hover:bg-neutral-950 text-sm text-white"
            href="mailto:pasapadilah1410@gmail.com"
          >
            Get in Touch
          </a>
        </nav>
      </div>
      <div className="z-10  p-5 relative mt-8">
        <div className="xl:max-w-7xl md:max-w-4xl  relative 6 m-auto text-center space-y-8 ">
          {/* <Smile className="absolute md:right-36 xl:right-52 animate-spin-slow right-10 w-16 -top-16 " /> */}
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-white  xl:max-w-4xl m-auto z-50 md:text-7xl  text-5xl  font-bold   "
          >
            Senior Web Designer from Indonesia with 3+ years of experience.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="md:max-w-2xl  leading-relaxed m-auto text-lg font-light text-white "
          >
            Hello, I'm Fasha—a designer who weaves creativity with code. Explore
            my work below and let's bring your ideas to life!
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex gap-4 justify-center"
          ></div>
        </div>
      </div>
      <div className="absolute  -inset-0  overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-25"></div>
      </div>
    </header>
  );
}
