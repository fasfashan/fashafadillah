import {
  Financy,
  Interior,
  Bootcamp,
  Comika,
  Saham,
  Staycation,
} from "../../assets/images";

export default function Exploration() {
  return (
    <section className="max-w-6xl p-5 m-auto">
      <div className=" mb-10 mt-24    border-b border-grey">
        <h2 className="  text-2xl ">Design Exploration</h2>
      </div>
      <div className="grid mt-10  gap-x-8 gap-y-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <img className="rounded-lg" src={Financy} alt="Financy" />
        <img className="rounded-lg" src={Interior} alt="Interior" />
        <img className="rounded-lg" src={Bootcamp} alt="Bootcamp" />
        <img className="rounded-lg" src={Comika} alt="Comika" />
        <img className="rounded-lg" src={Saham} alt="Saham" />
        <img className="rounded-lg" src={Staycation} alt="Staycation" />
      </div>
    </section>
  );
}
