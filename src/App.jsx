import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="max-w-3xl m-auto p-4 md:p-0 ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
