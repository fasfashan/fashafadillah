import Projects from "../assets/Projects";
export default function SideProjects() {
  return (
    <div
      id="sideproject"
      className="mt-20 space-y-8 bg-secondary border border-gray rounded-lg md:p-16 p-8"
    >
      <div className="flex px-4 py-1 bg-sky-600  w-fit rounded-lg items-center gap-2">
        <p className="text-white">Side Projects</p>
        <Projects />
      </div>

      <div className="space-y-4">
        <p className="md:text-2xl text-xl font-semibold">
          Dibibimbing Web Design Challange
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
    </div>
  );
}
