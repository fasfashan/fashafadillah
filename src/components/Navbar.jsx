export default function Navbar() {
  return (
    <header className="bg-emerald-700 border-b border-emerald-50 ">
      <nav className="py-4 bg-emerald-700 max-w-6xl  text-emerald-50  xl:px-0 p-4  m-auto   flex items-center justify-between  ">
        <img src="/logo.svg" alt="" />
        <ul className="flex font-medium items-center md:gap-6 gap-2 md:text-lg text-md">
          <li className="hover:text-emerald-200 transition-all">
            <a className="" href="#work">
              Work
            </a>
          </li>
          <li className="hover:text-emerald-200 transition-all">
            <a href="#sideproject"> Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
