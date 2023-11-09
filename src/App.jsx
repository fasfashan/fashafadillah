import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div id="top" className="max-w-5xl m-auto p-4 md:p-6 xl:p-0  ">
        <Work />
        <SideProjects />
        <Contact />
      </div>
    </>
  );
}

export default App;
