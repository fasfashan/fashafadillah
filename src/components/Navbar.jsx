export default function Navbar() {
  return (
    <header className=" sticky top-2  z-30 ">
      <nav className="px-5  py-4 backdrop-blur-md  mt-3 border rounded-lg flex items-center justify-between bg-secondary/30 border-gray ">
        <a
          href="#top"
          className="md:text-3xl hover:text-neutral-400 text-2xl font-bold"
        >
          Fasha.
        </a>
        <ul className="flex items-center gap-6 text-sm">
          <li className="hover:text-neutral-400 transition-all">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-neutral-400 transition-all">
            <a href="#sideproject">Side Project</a>
          </li>
          <li className="p-2  bg-sky-500 hover:bg-sky-600 transition-all rounded-lg">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
