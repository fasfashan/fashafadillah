import BriefCase from "../assets/BriefCase";
export default function Work() {
  return (
    <div
      id="work"
      className="mt-20  space-y-8 bg-secondary border border-gray rounded-lg md:p-16 p-8"
    >
      <div className="flex px-4 py-1 bg-sky-600  w-fit rounded-lg items-center gap-2">
        <p className="text-white font-medium">Work</p>
        <BriefCase />
      </div>

      <div className="space-y-4">
        <p className="md:text-2xl text-xl font-semibold">
          Murni Solusindo Nusantara, ID
        </p>

        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">UI Engineer</p>
          <p className="text-xs font-semibold ">Mar 2022 - Present</p>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          At Murni, I create designs and also develop websites. I collaborate
          with content writers to build websites or landing pages. Here, my
          HTML, CSS, and JS skills are honed further because in some projects,
          the tech stack used does not involve WordPress.
        </p>
      </div>
      <hr className="border border-gray" />
      <div className="space-y-4">
        <p className="md:text-2xl text-xl font-semibold">
          Kiki Tech PTE. LTD, SG
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">UI Designer</p>
          <p className="text-xs font-semibold">Sep 2021 - Feb 2022</p>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Working at Kiki was my first experience with remote work. There, I
          assisted in creating design documentation for the Kiki application, as
          the previous design had been done by a freelancer. Additionally, I
          also built the company profile website using WordPress.
        </p>
      </div>
      <hr className="border border-gray" />
      <div className="space-y-4">
        <p className="md:text-2xl text-xl font-semibold">Gagas Studio, ID</p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">Web Designer</p>
          <p className="text-xs font-semibold">Mar 2020 - Sep 2021</p>
        </div>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Gagas Studio marks the beginning of my career journey. As it is an
          agency, and most of its clients are SMEs, I assisted SMEs in creating
          websites using WordPress.
        </p>
      </div>
    </div>
  );
}
