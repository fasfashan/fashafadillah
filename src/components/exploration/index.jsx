import { Financy, LoginPage } from "../../assets/images";

export default function Exploration() {
  return (
    <section className="max-w-6xl p-5 m-auto">
      <div className=" mb-10 mt-36    border-b border-grey">
        <h2 className="  text-2xl ">Design Exploration</h2>
      </div>
      <div className="grid mt-10  gap-10 lg:grid-cols-2 grid-cols-1">
        <img className="rounded-lg" src={Financy} alt="Financy" />
        <img className="rounded-lg" src={LoginPage} alt="LoginPage" />
      </div>
    </section>
  );
}
