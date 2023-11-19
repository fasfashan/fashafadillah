import AOS from "aos";
import React from "../assets/React";
import Smile from "../assets/Smile";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-pattern md:bg-center bg-left  bg-cover   ">
      <header>
        <nav className="py-4  xl:max-w-7xl md:max-w-6xl  p-5  m-auto   flex items-center justify-between  ">
          <a
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            href="/"
          >
            <img src="/logo.svg" alt="Logo" />
          </a>

          <ul className="flex text-white font-medium items-center md:gap-10 gap-6 md:text-lg text-md">
            <li
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="hover:opacity-75 transition-all"
            >
              <a className="hover:opacity-60 transition-all" href="#about">
                About
              </a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="hover:opacity-75 transition-all"
            >
              <a className="hover:opacity-60 transition-all" href="#project">
                {" "}
                Project
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="   pb-20 p-5 pt-10">
        <div className="xl:max-w-7xl md:max-w-6xl  relative 6 m-auto text-center space-y-8 ">
          <Smile className="absolute md:right-36 xl:right-52 animate-spin-slow right-10 w-16 -top-16 " />
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-white md:max-w-5xl xl:max-w7xl m-auto z-50 xl:text-8xl md:text-6xl text-5xl font-secondary leading-tight font-normal"
          >
            Bridging Code and Design for Seamless Web Experiences.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="md:max-w-3xl  leading-relaxed m-auto text-xl font-light text-neutral-400 "
          >
            Hi! I’m <spa className="font-bold text-neutral-100">Fasha</spa> If
            you're looking for a{" "}
            <span className="font-bold text-neutral-100">designer</span> who has
            strong skills in both{" "}
            <span className="font-bold text-neutral-100">design</span> and{" "}
            <span className="font-bold text-neutral-100">coding</span>, you have
            come to the right place. Feel free to explore my work below.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex gap-4 justify-center"
          >
            <a
              className="font-bold button-primary transition-all hover:opacity-80 px-8 py-3 bg-neutral-100 rounded-lg text-neutral-900"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
