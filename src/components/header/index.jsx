/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import LinkedIn from "../../assets/icons/LinkedIn";
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
        isScrolled
          ? "shadow-sm backdrop-blur-sm  border-b border-neutral-300"
          : ""
      }`}
    >
      <nav className=" p-5 text-emerald-50 max-w-5xl m-auto  flex items-center justify-between  ">
        <div className="flex items-center gap-x-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50  transition-all"
            href="https://github.com/fasfashan"
          >
            <Github />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-50  transition-all"
            href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
          >
            {" "}
            <LinkedIn />
          </a>
        </div>

        <a
          className="font-semibold transition-all rounded-md  px-5 py-2   btn hover:opacity-90 text-sm text-white"
          href="mailto:pasapadilah1410@gmail.com"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
