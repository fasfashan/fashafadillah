/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import LinkedIn from "../../assets/icons/LinkedIn";
import { ArrowTopRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Fasha from "../../assets/images/fasha.jpg";
import Github from "../../assets/icons/Github";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0  ${
        isScrolled ? "shadow-sm bg-white  border-b border-neutral-200" : ""
      }`}
    >
      <nav className=" px-5 py-3 text-emerald-50 max-w-6xl m-auto  flex items-center justify-between  ">
        <div className="flex  items-center gap-x-4">
          <a className="text-black text-2xl font-bold" href="/">
            Fa<span className="text-primary">s</span>ha
            <span className="text-primary">.</span>
          </a>
        </div>

        <div className="flex border border-grey bg-secondary shadow-xs rounded-full text-black font-medium text-sm transition-all  md:gap-10 gap-4 py-2 px-4">
          <a
            className="flex hover:opacity-50 items-center gap-1"
            href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
          >
            LinkedIn <ArrowTopRightIcon />
          </a>
          <a
            className="flex hover:opacity-50 items-center gap-1"
            href="https://twitter.com/fasfashan"
          >
            Twitter <ArrowTopRightIcon />
          </a>
          <a
            className="flex hover:opacity-50 items-center gap-1"
            href="https://github.com/fasfashan"
          >
            Github <ArrowTopRightIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
