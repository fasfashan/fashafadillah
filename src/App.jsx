import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import DesignExploration from "./components/DesignExploration";
import DesignChallange from "./components/DesignChallange";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <DesignChallange />
      <DesignExploration />
      <Contact />
    </>
  );
}

export default App;
