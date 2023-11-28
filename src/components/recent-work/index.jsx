/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Dibimbing from "../../assets/images/dibimbing.jpg";
import Niagahoster from "../../assets/images/Niagahoster.jpg";
import ProWork from "../../assets/images/ProWork.jpg";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export default function RecentWork() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <section id="selected-work" className="max-w-6xl p-5 m-auto">
      <div className=" mb-10 mt-36    border-b border-grey">
        <h2 className="  text-2xl ">Selected work</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
        <div className="space-y-6">
          <img className="rounded-lg" src={Dibimbing} alt="Dibimbing" />
          <p className="text-paragraf  leading-relaxed">
            Dibimbing.id making a "Beauty of Indonesia" web design challange
            competition. In this project I made a single App Application List of
            Volcanoes in Indonesia. I use Vite JS and Tailwind CSS for this
            project.{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="font-medium underline hover:opacity-70 transition-all"
              href="https://www.linkedin.com/posts/dibimbing-id_dibimbingid-webdesignchallenge-dibimbingchallenge-activity-7121068536130674689-rluB/"
            >
              I won first place in this challenge.
            </a>{" "}
          </p>
          <div>
            <a
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="bg-white transition-all flex items-center gap-1 w-fit hover:bg-neutral-50 rounded-lg text-black border border-grey shadow-sm px-4 py-2"
              href="https://dibimbing-web-design-challenge.vercel.app/"
            >
              Visit website{" "}
              {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <img className="rounded-lg" src={Niagahoster} alt="Niagahoster" />
          <p className="text-paragraf  leading-relaxed">
            Niagahoster created a #journeywithniagahoster landing page
            competition. Participants must create a landing page containing
            articles about their experiences using Niagahoster services.{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="font-medium underline hover:opacity-70 transition-all"
              href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
            >
              I got 3rd place in this challenge.
            </a>{" "}
          </p>
          <div>
            <a className="bg-neutral-100 cursor-default transition-all flex items-center gap-1 w-fit  rounded-lg text-neutral-400 border border-grey shadow-sm px-4 py-2">
              Case study in progress <CrossCircledIcon />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <img className="rounded-lg" src={ProWork} alt="ProWork" />
          <p className="text-paragraf  leading-relaxed">
            ProWork is a co-working space project developed by PT Murni
            Solusindo Nusantara (PT Murni). This project is made based on PT
            Murni’s commitment to empower business and its people, by providing
            well-designed and functional spaces to work in.
          </p>
          <div>
            <a className="bg-neutral-100 cursor-default transition-all flex items-center gap-1 w-fit  rounded-lg text-neutral-400 border border-grey shadow-sm px-4 py-2">
              Case study in progress <CrossCircledIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
