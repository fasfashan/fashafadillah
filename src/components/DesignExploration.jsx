import Staycation from "../assets/staycation.jpg";
import Comika from "../assets/comika.jpg";
import StockExchange from "../assets/StockExchange.jpg";
import ComikaEvent from "../assets/Comika-App.jpg";
import BootChampion from "../assets/BootChampion.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function DesignExploration() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      className=" m-auto space-y-0   mt-32 md:max-w-6xl rounded-lg xl:max-w-7xl"
    >
      <div className="mb-16 p-5 space-y-4">
        <h3 className="md:text-6xl text-4xl   font-secondary text-black">
          Design Exploration
        </h3>
        <p className="md:text-2xl text-xl text-neutral-500  font-light  md:leading-relaxed md:w-2/3 w-full">
          I enjoy exploring design in Figma. For example, when I come across
          interesting layout ideas or websites, I immediately dive into
          exploration.
        </p>
      </div>

      <div className="grid gap-6 gap  p-5  grid-cols-2  ">
        <img src={Staycation} alt="staycation" />
        <img src={StockExchange} alt="StockExchange" />

        <img className="col-span-2" src={Comika} alt="Comika" />
        <img src={ComikaEvent} alt="Comika Event" />
        <img src={BootChampion} alt="BootChampion" />
      </div>
    </div>
  );
}