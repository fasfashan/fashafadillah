/* eslint-disable react/no-unescaped-entities */
import "../../index.css";
import Smile from "../../assets/Smile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative pb-20 p-5 pt-10 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-40"></div>
      </div>
      <div className="xl:max-w-7xl  md:max-w-6xl  relative 6 m-auto text-center space-y-8 ">
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
          className="md:max-w-4xl  leading-relaxed m-auto text-2xl font-light text-neutral-500 "
        >
          Hi! I’m <spa className="font-medium text-neutral-900">Fasha</spa> If
          you're looking for a{" "}
          <span className="font-medium text-neutral-900">designer</span> who has
          strong skills in both{" "}
          <span className="font-medium text-neutral-900">design</span> and{" "}
          <span className="font-medium text-neutral-900">coding</span>, you have
          come to the right place. Feel free to explore my work below.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          className="flex gap-4 justify-center"
        ></div>
      </div>
    </div>
  );
}
