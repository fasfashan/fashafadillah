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
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>

        <a
          className="font-bold transition-all hover:opacity-80 px-4 py-2 bg-transparent  border hover:bg-neutral-100 border-neutral-400 text-sm rounded-lg text-black"
          href="mailto:pasapadilah1410@gmail.com"
        >
          Send Me a Message
        </a>
      </nav>
    </header>
  );
}
