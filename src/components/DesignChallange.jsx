import Dibimbing from "../assets/dibimbing.jpg";
import Niagahoster from "../assets/Niagahoster.jpg";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function DesignChallange() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      id="works"
      className=" m-auto   mt-32 md:max-w-6xl  p-5  rounded-lg xl:max-w-7xl"
    >
      <div className="mb-16 space-y-4">
        <h3 className="md:text-6xl text-4xl   font-secondary text-black">
          Design Challenge
        </h3>
        <p className="md:text-2xl text-xl text-neutral-500  font-light  md:leading-relaxed md:w-2/3 w-full">
          I participate in several design/web development competitions that I
          come across. Certainly, besides aiming to win prizes, through this
          method, I learn a lot of things.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
        <div className="hover:shadow-2xl transition-all">
          <img src={Dibimbing} alt="" />
          <div className=" space-y-2 p-6 bg-white border-r border-b border-l rounded-b-lg border-neutral-200 flex flex-col ">
            <div className="flex items-center justify-between">
              <h3 className=" md:text-xl text-base font-semibold   text-black">
                Dibimbing Web Design Challange
              </h3>
              <a
                target="_blank"
                href="https://dibimbing-web-design-challenge.vercel.app/"
              >
                <ArrowTopRightIcon
                  width={24}
                  height={24}
                  className="hover:opacity-50 transition-all"
                />
              </a>
            </div>

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
          </div>
        </div>
        <div className="  hover:shadow-2xl transition-all " target="_blank">
          <img src={Niagahoster} alt="Niagahoster" />
          <div className=" space-y-2 p-6 bg-white border-r border-b border-l rounded-b-lg border-neutral-200 flex flex-col ">
            <div className="flex items-center justify-between">
              <h3 className=" md:text-xl text-base font-semibold   text-black">
                Niagahoster Web Design Challange
              </h3>
              <a
                target="_blank"
                href="https://dokumentasiwebsite.notion.site/dokumentasiwebsite/Lomba-Landing-Page-JourneyWithNiagahoster-4c9ef0e3a331452c98af7a8048d6a187"
              >
                <ArrowTopRightIcon
                  width={24}
                  height={24}
                  className="hover:opacity-50 transition-all"
                />
              </a>
            </div>
            <p className=" md:text-xl text-base text-neutral-500  md:leading-loose leading-relaxed">
              Niagahoster created a #journeywithniagahoster landing page
              competition. Participants must create a landing page containing
              articles about their experiences using Niagahoster services. In
              this competition,{" "}
              <a
                className="underline text-black hover:opacity-60"
                target="_blank"
                href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
              >
                I got 3rd place.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
