import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <SideProjects />
      <Contact />
    </>
  );
}

export default App;
