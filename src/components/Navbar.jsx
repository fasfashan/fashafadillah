import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header className="bg-gradient-to-r from-rose-100 to-teal-100 border-b border-neutral-400 ">
      <nav className="py-4  xl:max-w-7xl md:max-w-6xl   text-emerald-50   p-5  m-auto   flex items-center justify-between  ">
        <a
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          href="/"
        >
          <img src="/logo.svg" alt="Logo" />
        </a>

        <ul className="flex text-black font-medium items-center md:gap-10 gap-6 md:text-lg text-md">
          <li
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="hover:opacity-75 transition-all"
          >
            <a className="hover:opacity-60 transition-all" href="#about">
              About
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="hover:opacity-75 transition-all"
          >
            <a className="hover:opacity-60 transition-all" href="#project">
              {" "}
              Project
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="hover:opacity-75 transition-all"
          >
            <a className="hover:opacity-60 transition-all" href="#contact">
              {" "}
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
