import React from "../assets/React";
import Smile from "../assets/Smile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 border-b border-neutral-400 pb-20 p-5 pt-10">
      <div className="xl:max-w-7xl md:max-w-6xl  relative 6 m-auto text-center space-y-8 ">
        <Smile className="absolute md:right-36 xl:right-52 animate-spin-slow right-10 w-16 -top-16 " />
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-black md:max-w-5xl xl:max-w7xl m-auto z-50 xl:text-8xl md:text-6xl text-5xl font-secondary leading-tight font-normal"
        >
          Bridging Code and Design for Seamless Web Experiences.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="md:max-w-3xl  leading-relaxed m-auto text-xl font-light text-neutral-500 "
        >
          Hi! I’m <spa className="font-bold text-neutral-900">Fasha</spa> If
          you're looking for a{" "}
          <span className="font-bold text-neutral-900">designer</span> who has
          strong skills in both{" "}
          <span className="font-bold text-neutral-900">design</span> and{" "}
          <span className="font-bold text-neutral-900">coding</span>, you have
          come to the right place. Feel free to explore my work below.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="flex gap-4 justify-center"
        >
          <a
            className="font-bold transition-all hover:opacity-80 px-8 py-3 bg-emerald-500 rounded-lg text-white"
            href="/resume.pdf"
          >
            Resume
          </a>
          <a
            className="font-bold transition-all hover:opacity-80 px-8 py-3 bg-transparent border border-neutral-400 rounded-lg text-neutral-900"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
