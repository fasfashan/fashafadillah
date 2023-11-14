import Dibimbing from "../assets/dibimbing.png";
import Niagahoster from "../assets/Niagahoster.png";
import DesignHub from "../assets/DesignHub.png";
import Dashboard from "../assets/Dashboard.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function SideProjects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="project"
      className="space-y-32 m-auto   mt-32 md:max-w-6xl  p-5  rounded-lg xl:max-w-7xl"
    >
      <div className="space-y-6">
        <div className="  gap-10 grid items-center grid-cols-12">
          <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="md:col-span-7 w-full hover:scale-95 transition-all  col-span-12"
            src={Dibimbing}
            alt="Dibimbing.id"
          />
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="md:col-span-5 col-span-12 space-y-2  flex flex-col "
          >
            <h3 className=" md:text-xl text-base font-semibold   text-black">
              Dibimbing Web Design Challange
            </h3>
            <p className="  md:text-xl text-base text-neutral-500  md:leading-loose leading-relaxed">
              Dibimbing.id making a "Beauty of Indonesia" web design challange
              competition. In this project I made a single App Application List
              of Volcanoes in Indonesia. I use Vite JS and Tailwind CSS for this
              project.{" "}
              <a
                className="underline text-black hover:opacity-60"
                target="_blank"
                href="https://www.linkedin.com/posts/dibimbing-id_dibimbingid-webdesignchallenge-dibimbingchallenge-activity-7121068536130674689-rluB?utm_source=share&utm_medium=member_desktop"
              >
                I won first place in this challenge.
              </a>{" "}
            </p>
            <a
              className="font-bold w-fit transition-all hover:opacity-80 px-8 py-3 bg-emerald-600 text-emerald-50"
              href="https://dibimbing-web-design-challenge.vercel.app/"
              target="_blank"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="  gap-10 grid items-center grid-cols-12">
          <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="md:col-span-7 hover:scale-95 transition-all  col-span-12"
            src={Niagahoster}
            alt="Niagahoster"
          />
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="md:col-span-5 col-span-12 space-y-2  flex flex-col "
          >
            <h3 className=" md:text-xl text-base  font-semibold text-black">
              Niagahoster Landing Page Contest
            </h3>
            <p className=" md:text-xl text-base text-neutral-500  md:leading-loose leading-relaxed">
              Niagahoster created a #journeywithniagahoster landing page
              competition. Participants must create a landing page containing
              articles about their experiences using Niagahoster services. In
              this competition,{" "}
              <a
                className="underline text-black"
                target="_blank"
                href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
              >
                I got 3rd place.
              </a>{" "}
            </p>
            <a
              className="font-bold w-fit transition-all hover:opacity-80 px-8 py-3 bg-emerald-600 text-emerald-50"
              href="https://dokumentasiwebsite.notion.site/dokumentasiwebsite/Lomba-Landing-Page-JourneyWithNiagahoster-4c9ef0e3a331452c98af7a8048d6a187"
              target="_blank"
            >
              Case Study
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h3
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="font-secondary text-black text-center text-3xl"
        >
          Another case study in progress
        </h3>
        <div className="grid gap-10 grid-cols-2">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="md:col-span-1 space-y-8 col-span-2"
          >
            <img src={DesignHub} alt="DesignHub" />
            <div class="w-full bg-neutral-300  h-3 ">
              <div class="bg-emerald-600 h-3 " style={{ width: "30%" }}></div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="md:col-span-1 col-span-2 space-y-8"
          >
            <img src={Dashboard} alt="Dashboard" />
            <div class="w-full bg-neutral-300  h-3 ">
              <div class="bg-emerald-600 h-3 " style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
