/* eslint-disable react/no-unescaped-entities */

import "../../index.css";
import LinkedIn from "../../assets/LinkedIn";
import Github from "../../assets/Github";
export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className=" flex flex-col py-10 gap-8  items-center p-5   mt-32 "
    >
      <div className="md:max-4xl space-y-8 xl:max-w-6xl">
        <h2 className="md:text-7xl text-4xl  text-white font-bold ">
          Let's work together and create something{" "}
          <span className="underline">beautiful</span>!
        </h2>
        <div>
          <a
            className="font-semibold transition-all rounded-md  px-5 py-2  bg-btn btn hover:bg-neutral-950 text-sm text-white"
            href="mailto:pasapadilah1410@gmail.com"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-neutral-400 flex-wrap">
          <p className=" text-white">
            © {currentYear} Fasha Fadillah. All Rights Reserved.
          </p>
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
        </div>
      </div>
    </footer>
  );
}
