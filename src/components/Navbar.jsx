export default function Navbar() {
  return (
    <nav className="px-5 py-4  mt-3 border rounded-lg flex items-center justify-between bg-secondary border-gray ">
      <h1 className="md:text-3xl text-2xl font-bold">Fasha.</h1>
      <ul className="flex items-center gap-6 text-sm">
        <li className="hover:text-neutral-400 transition-all">
          <a href="#work">Work</a>
        </li>
        <li className="hover:text-neutral-400 transition-all">
          <a href="#sideproject">Side Project</a>
        </li>
        <li className="p-2 bg-sky-500 hover:bg-sky-600 transition-all rounded-lg">
          <a href="mailto:pasapadilah1410@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
