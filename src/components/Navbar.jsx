export default function Navbar() {
  return (
    <header className="bg-emerald-700 border-b border-emerald-50 ">
      <nav className="py-4 bg-emerald-700 max-w-6xl  text-emerald-50  xl:px-0 p-4  m-auto   flex items-center justify-between  ">
        <a href="#">
          <img className="animate-spin-slow" src="/logo.svg" alt="" />
        </a>

        <ul className="flex font-medium items-center gap-6 md:text-lg text-md">
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
