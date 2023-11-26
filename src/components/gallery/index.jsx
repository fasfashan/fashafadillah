import { Bootcamp, Comika, Saham, Staycation } from "../../assets/images";

export default function Gallery() {
  return (
    <>
      <div className="grid mt-10 max-w-5xl p-5 m-auto gap-5 grid-cols-2">
        <img src={Staycation} alt="Staycation" />
        <img src={Saham} alt="Saham" />
        <img src={Bootcamp} alt="Bootcamp" />
        <img src={Comika} alt="Comika" />
      </div>
    </>
  );
}
