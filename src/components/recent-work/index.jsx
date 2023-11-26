/* eslint-disable react/no-unescaped-entities */
import Dibimbing from "../../assets/images/dibimbing.jpg";
import Niagahoster from "../../assets/images/Niagahoster.jpg";
import NiagahosterLogo from "../../assets/images/niagahoster-logo.png";
import BCA from "../../assets/images/BCA.jpg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { BCALogo, DibimbingLogo } from "../../assets/icons";
export default function RecentWork() {
  return (
    <>
      <div className=" mb-10 mt-20   border-b border-neutral-300">
        <div className="max-w-5xl flex justify-between px-5 py-2 m-auto">
          <h2 className="font-light text-lg ">Recent work</h2>
          <h2 className="font-light text-lg ">2022-2023</h2>
        </div>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 grid max-w-5xl m-auto gap-5 p-5">
        <img src={Dibimbing} alt="Dibimbing" />
        <div className="space-y-2">
          <DibimbingLogo />
          <p className="text-neutral-700 font-light leading-relaxed">
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
            <br /> <br />
            Why did I choose the Volcano theme? Its majestic shape and
            surrounding scenery are often breathtaking. Some people even find
            artistic beauty in the volcanic activity itself. Then in addition,
            volcanoes also have benefits at least in the surrounding community.
            So, yes, it could be said that volcanoes have their own beauty
            appeal.
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dibimbing-web-design-challenge.vercel.app/"
            className="flex hover:opacity-70 transition-all text-sm font-medium items-center gap-2"
          >
            Visit website <ArrowRightIcon />
          </a>
        </div>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 grid max-w-5xl m-auto gap-5 p-5">
        <img src={Niagahoster} alt="Niagahoster" />
        <div className="space-y-4">
          <img src={NiagahosterLogo} className="h-6" alt="Niagahoster" />
          <p className="text-neutral-700 font-light leading-relaxed">
            Niagahoster created a #journeywithniagahoster landing page
            competition. Participants must create a landing page containing
            articles about their experiences using Niagahoster services. In this
            competition,{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="font-medium underline hover:opacity-70 transition-all"
              href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
            >
              I got 3rd place.
            </a>{" "}
            <br /> <br />
            Based on their provisions, there are at least 3 provisions for
            website content: <br /> 1. The theme of the article is "Your Journey
            with Niagahoster". For example: Reviews of Niagahoster products and
            services, utilizing blogs, ebooks, forums, Niagahoster events to
            help us learn....
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dokumentasiwebsite.notion.site/dokumentasiwebsite/Lomba-Landing-Page-JourneyWithNiagahoster-4c9ef0e3a331452c98af7a8048d6a187"
            className="flex hover:opacity-70 transition-all text-sm font-medium items-center gap-2"
          >
            Read case study <ArrowRightIcon />
          </a>
        </div>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 grid max-w-5xl m-auto gap-5 p-5">
        <img src={BCA} alt="BCA" />
        <div className="space-y-4">
          <BCALogo />
          <p className="text-neutral-700 font-light leading-relaxed">
            This case study is still in the progress stage. Anyway, the BCA
            Innovation Convention is a program to channel employee innovation
            ideas in the financial sector. In this event I designed the website
            used in the event.
          </p>
        </div>
      </div>
    </>
  );
}
