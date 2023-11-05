import Spark from "../assets/Spark";
import Email from "../assets/Email";
import LinkedIn from "../assets/LinkedIn";
import Github from "../assets/Github";
export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="mt-20 mb-10  space-y-8 bg-secondary border border-gray rounded-lg md:px-16 p-8"
    >
      <div className="flex px-4 py-1 bg-sky-600  w-fit rounded-lg items-center gap-2">
        <p className="text-white font-medium">Let's Connect</p>
        <Spark />
      </div>
      <div className="flex gap-4 items-center">
        <a
          className="flex items-center gap-1 hover:opacity-70 transition-all"
          href="mailto:pasapadilah1410@gmail.com"
        >
          <Email /> Email{" "}
        </a>
        <a
          target="_blank"
          className="flex items-center gap-1 hover:opacity-70 transition-all"
          href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
        >
          <LinkedIn /> LinkedIn{" "}
        </a>
        <a
          target="_blank"
          className="flex items-center gap-1 hover:opacity-70 transition-all"
          href="https://github.com/fasfashan"
        >
          <Github /> Github{" "}
        </a>
      </div>
      <p className="text-sm">
        © {currentYear} Fasha Fadillah. All Rights Reserved.
      </p>
    </footer>
  );
}
