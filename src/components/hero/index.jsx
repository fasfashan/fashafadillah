/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Fasha from "../../assets/images/fasha.jpg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  CSS,
  Figma,
  Tailwind,
  HTML,
  Javascript,
  VScode,
} from "../../assets/icons";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="max-w-5xl p-5 m-auto grid grid-cols-4 gap-5  mt-10  ">
        <div className="col-span-4 md:col-span-3 space-y-4">
          <h1 className="font-light md:leading-tight leading-snug tracking-tighter md:text-6xl text-4xl">
            Senior Web Designer
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-teal-300 to-teal-800">
              {" "}
              with 3+ years{" "}
            </span>{" "}
            of experience.
          </h1>
          <p className="text-xl font-light text-neutral-700">
            Hello, I'm Fasha—a designer who weaves creativity with code. Explore
            my work below and let's bring your ideas to life!
          </p>

          <div className="flex gap-6">
            <Figma />
            <ReactTooltip style={{ backgroundColor: "#262626" }} id="Figma" />
            <VScode />
            <ReactTooltip style={{ backgroundColor: "#262626" }} id="VScode" />

            <HTML />
            <ReactTooltip style={{ backgroundColor: "#262626" }} id="HTML" />
            <CSS />
            <ReactTooltip style={{ backgroundColor: "#262626" }} id="CSS" />
            <Javascript />
            <ReactTooltip
              style={{ backgroundColor: "#262626" }}
              id="Javascript"
            />
            <Tailwind />
            <ReactTooltip
              style={{ backgroundColor: "#262626" }}
              id="Tailwind"
            />

            <ReactTooltip
              style={{ backgroundColor: "#262626" }}
              id="Wordpress"
            />
            <svg
              data-tooltip-id="Wordpress"
              data-tooltip-content="Wordpress"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="none"
            >
              <g clipPath="url(#clip0_202_17)">
                <path
                  d="M4.52 32C4.52 42.9 10.78 52.29 19.92 56.696L6.956 20.87C5.45 24.348 4.52 28.06 4.52 32ZM50.55 30.608C50.55 27.248 49.274 24.808 48.23 23.072C46.838 20.752 45.564 18.898 45.564 16.58C45.564 14.03 47.536 11.71 50.204 11.71H50.552C45.68 7.188 39.188 4.52 32 4.52C27.4523 4.56027 22.9833 5.71165 18.9823 7.87391C14.9813 10.0362 11.5695 13.1437 9.044 16.926H10.784C13.684 16.926 18.088 16.578 18.088 16.578C19.596 16.462 19.712 18.664 18.32 18.898C18.32 18.898 16.812 19.13 15.19 19.13L25.162 48.81L31.19 30.838L26.9 19.128L24 18.9C22.492 18.784 22.724 16.58 24.116 16.58C24.116 16.58 28.636 16.928 31.304 16.928C34.204 16.928 38.608 16.58 38.608 16.58C40.116 16.464 40.232 18.666 38.84 18.9C38.84 18.9 37.332 19.132 35.71 19.132L45.68 48.7L48.48 39.54C49.64 35.714 50.566 33.048 50.566 30.612L50.55 30.608ZM32.464 34.434L24.232 58.32C26.666 59.016 29.332 59.48 32 59.48C35.246 59.48 38.26 58.88 41.16 57.972C41.044 57.856 41.044 57.74 40.928 57.624L32.464 34.434ZM56.116 18.9L56.348 21.7C56.348 24.5 55.884 27.614 54.262 31.556L45.914 55.788C54.03 51.034 59.594 42.222 59.594 32.02C59.478 27.266 58.202 22.86 56.114 18.92L56.116 18.9ZM32 0C14.376 0 0 14.376 0 32C0 49.624 14.376 64 32 64C49.624 64 64 49.624 64 32C64 14.376 49.624 0 32 0ZM32 62.608C15.188 62.608 1.508 48.928 1.508 32C1.52069 23.9169 4.73731 16.1685 10.4529 10.4529C16.1685 4.73731 23.9169 1.52069 32 1.508C40.0831 1.52069 47.8315 4.73731 53.5471 10.4529C59.2627 16.1685 62.4793 23.9169 62.492 32C62.492 48.928 48.812 62.608 32 62.608Z"
                  fill="#00749A"
                />
              </g>
              <defs>
                <clipPath id="clip0_202_17">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content="CSS"
          className="col-span-4 md:col-span-1 rounded-lg"
          src={Fasha}
          alt="Fasha Foto"
        />
      </div>
    </>
  );
}
