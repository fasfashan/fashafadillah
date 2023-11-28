import { Bootcamp, Comika, Saham, Staycation } from "../../assets/images";

export default function Gallery() {
  return (
    <>
      <div className="grid mt-10 max-w-6xl p-5 m-auto gap-5 grid-cols-2">
        <img className="rounded-lg" src={Staycation} alt="Staycation" />
        <img className="rounded-lg" src={Saham} alt="Saham" />
        <img className="rounded-lg" src={Bootcamp} alt="Bootcamp" />
        <img className="rounded-lg" src={Comika} alt="Comika" />
      </div>
    </>
  );
}
