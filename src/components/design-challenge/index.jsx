/* eslint-disable react/no-unescaped-entities */
import Dibimbing from "../../assets/dibimbing.jpg";
import Niagahoster from "../../assets/Niagahoster.jpg";
import BCA from "../../assets/BCA.jpg";
import NiagahosterLogo from "../../assets/niagahoster-logo.png";
import BCALogo from "../../assets/BCA";
import DibimbingLogo from "../../assets/dibimbing";
import AOS from "aos";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function DesignChallange() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="works"
      className=" m-auto  mt-20  p-5 md:max-w-4xl  rounded-lg xl:max-w-6xl"
    >
      <div className="mb-16 flex pb-2 items-center justify-between border-b border-neutral-400 space-y-4">
        <h3 className="font-medium xl:text-3xl text-xl     text-white">
          Recent Work
        </h3>
        <h3 className="font-medium xl:text-3xl text-xl      text-white">
          Web Design
        </h3>
      </div>
      <div className="grid   mb-20 md:grid-cols-3 grid-cols-1 gap-8 ">
        <img className="col-span-2" src={Dibimbing} alt="" />
        <div className=" space-y-4">
          <div className="space-y-4  ">
            <DibimbingLogo />
            <p className="text-white leading-relaxed  ">
              Dibimbing.id making a "Beauty of Indonesia" web design challange
              competition. In this project I made a single App Application List
              of Volcanoes in Indonesia. I use Vite JS and Tailwind CSS for this
              project. I won first place in this challenge. <br /> <br />
              Why did I choose the Volcano theme? Its majestic shape and
              surrounding scenery are often breathtaking. Some people even find
              artistic beauty in the volcanic activity itself. Then in addition,
              volcanoes also have benefits at least in the surrounding
              community. So, yes, it could be said that volcanoes have their own
              beauty appeal.
            </p>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://dibimbing-web-design-challenge.vercel.app/"
              className="flex hover:opacity-70 transition-all text-sm items-center gap-x-2 text-white"
            >
              View site <ArrowRightIcon className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid    md:grid-cols-3 grid-cols-1 gap-8 ">
        <img className="col-span-2" src={Niagahoster} alt="" />
        <div className=" space-y-4">
          <div className="space-y-4  ">
            <img src={NiagahosterLogo} className="h-8" alt="" />
            <p className="text-white leading-relaxed   ">
              Niagahoster created a #journeywithniagahoster landing page
              competition. Participants must create a landing page containing
              articles about their experiences using Niagahoster services. In
              this competition, I got 3rd place. <br /> <br />
              Based on their provisions, there are at least 3 provisions for
              website content:
              <ol>
                <li>
                  1. The theme of the article is "Your Journey with
                  Niagahoster". For example: Reviews of Niagahoster products and
                  services, utilizing blogs, ebooks, forums, Niagahoster events
                  to help us learn....
                </li>
              </ol>
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dibimbing-web-design-challenge.vercel.app/"
              className="flex hover:opacity-70 transition-all text-sm items-center gap-x-2 text-white"
            >
              Read case study <ArrowRightIcon className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid mt-20    md:grid-cols-3 grid-cols-1 gap-8 ">
        <img className="col-span-2" src={BCA} alt="" />
        <div className=" space-y-4">
          <div className="space-y-4  ">
            <BCALogo />
            <p className="text-white leading-relaxed   ">
              This case study is still in the progress stage. Anyway, the BCA
              Innovation Convention is a program to channel employee innovation
              ideas in the financial sector. In this event I designed the
              website used in the event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
