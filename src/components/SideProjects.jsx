import Projects from "../assets/Projects";
import Video from "../assets/dibimbing.mp4";
import Niagahoster from "../assets/niagahoster.mp4";
import Eksternal from "../assets/Eksternal";
import BCA from "../assets/BIC-BCA.png";
import Comika from "../assets/Comika.id.png";
import Gamefinity from "../assets/Gamefinity.png";
import Mizuho from "../assets/Mizuho.png";
import { Tooltip } from "react-tooltip";
export default function SideProjects() {
  const toolTipStyle = {
    color: "white",
    backgroundColor: "#0284c7",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 600,
  };
  return (
    <div
      id="sideproject"
      className="mt-20 space-y-8 bg-secondary border border-gray rounded-lg md:p-16 p-8"
    >
      <div className="flex px-4 py-1 bg-sky-600  w-fit rounded-lg items-center gap-2">
        <p className="text-white font-medium">Side Projects</p>
        <Projects />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <a
            target="_blank"
            href="https://dibimbing-web-design-challenge.vercel.app/"
            className="md:text-2xl hover:underline text-lg font-semibold"
          >
            Dibibimbing Web Design Challange
          </a>
          <a
            target="_blank"
            href="https://dibimbing-web-design-challenge.vercel.app/"
          >
            {" "}
            <Eksternal />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="py-1 select-none px-2 border-2 text-sky-800 font-semibold border-sky-300 bg-sky-50 rounded-lg text-xs">
            Vite JS
          </span>
          <span className="py-1 select-none px-2 border-2 text-indigo-800 font-semibold border-indigo-400 bg-indigo-50 rounded-lg text-xs">
            Tailwind
          </span>
          <span className="py-1 select-none px-2 border-2 text-green-800 font-semibold border-green-600 bg-green-50 rounded-lg text-xs">
            Vercell
          </span>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          <span className="text-white"> Dibimbing.id</span> making a{" "}
          <span className="text-white">"Beauty of Indonesia"</span> web design
          challange competition. In this project I made a single App Application
          List of Volcanoes in Indonesia. I use Vite JS and Tailwind CSS for
          this project.{" "}
          <a
            className="text-white underline"
            target="_blank"
            href="https://www.linkedin.com/posts/dibimbing-id_dibimbingid-webdesignchallenge-dibimbingchallenge-activity-7121068536130674689-rluB?utm_source=share&utm_medium=member_desktop"
          >
            I won first place
          </a>{" "}
          in this challenge.
        </p>
        <video className="rounded-lg w-full" autoPlay muted loop playsInline>
          <source src={Video} type="video/webm" />
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <hr className="border border-gray" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <a
            target="_blank"
            href="https://dokumentasiwebsite.notion.site/dokumentasiwebsite/Lomba-Landing-Page-JourneyWithNiagahoster-4c9ef0e3a331452c98af7a8048d6a187"
            className="md:text-2xl hover:underline text-lg font-semibold"
          >
            Niagahoster Landing Page Contest
          </a>
          <a
            target="_blank"
            href="https://dokumentasiwebsite.notion.site/dokumentasiwebsite/Lomba-Landing-Page-JourneyWithNiagahoster-4c9ef0e3a331452c98af7a8048d6a187"
          >
            {" "}
            <Eksternal />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="py-1 select-none px-2 border-2 text-sky-800 font-semibold border-sky-300 bg-sky-50 rounded-lg text-xs">
            Bootstrap
          </span>
          <span className="py-1 select-none px-2 border-2 text-indigo-800 font-semibold border-indigo-400 bg-indigo-50 rounded-lg text-xs">
            Niagahoster
          </span>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          <span className="text-white">Niagahoster</span> created a{" "}
          <span className="text-white">#journeywithniagahoster</span> landing
          page competition. Participants must create a landing page containing
          articles about their experiences using Niagahoster services. In this
          competition,{" "}
          <a
            className="text-white underline"
            href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
          >
            I got 3rd place.
          </a>
        </p>
        <video className="rounded-lg w-full" autoPlay muted loop playsInline>
          <source src={Niagahoster} type="video/webm" />
          <source src={Niagahoster} type="video/mp4" />
        </video>
      </div>
      <hr className="border border-gray" />
      <div className="space-y-8  ">
        <div className="flex-wrap justify-around flex gap-4 ">
          <Tooltip style={toolTipStyle} id="BCA" />
          <img
            data-tooltip-id="BCA"
            data-tooltip-content="BCA Innovation Convention 2022"
            className="md:w-72 w-full rounded-lg border-2 -2-gray"
            src={BCA}
            alt="BCA"
          />
          <Tooltip style={toolTipStyle} id="Comika" />
          <img
            data-tooltip-id="Comika"
            data-tooltip-content="Redesign Website Comika.id"
            className="md:w-72 w-full rounded-lg border-2 border-gray"
            src={Comika}
            alt="Comika"
          />
          <Tooltip style={toolTipStyle} id="Gamefinity" />
          <img
            data-tooltip-id="Gamefinity"
            data-tooltip-content="Redesign Website Gamefinity.id"
            className="md:w-72 w-full rounded-lg border-2 border-gray"
            src={Gamefinity}
            alt="Gamefinity"
          />
          <Tooltip style={toolTipStyle} id="Mizuho" />
          <img
            data-tooltip-id="Mizuho"
            data-tooltip-content="eChannel Mizuho"
            className="md:w-72 w-full rounded-lg border-2 border-gray"
            src={Mizuho}
            alt="Mizuho"
          />
        </div>
        <div className="text-xs m-auto px-2 py-1 max-w-fit bg-primary border border-neutral-600 rounded-lg  text-center">
          <p> Some case study in progress. Will finish it ASAP🫰🏻</p>
        </div>
      </div>
    </div>
  );
}
