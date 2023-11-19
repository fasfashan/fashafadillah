import Email from "../assets/Email";
import LinkedIn from "../assets/LinkedIn";
import Github from "../assets/Github";
export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="border-t border-neutral-400 flex flex-col py-10 gap-8  items-center   mt-32 "
    >
      <div className="   flex-wrap  max-w-6xl m-auto justify-between">
        <div className="flex text-neutral-900 gap-4 items-center">
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
      </div>
      <p className=" text-center">
        © {currentYear} Fasha Fadillah. All Rights Reserved.
      </p>
    </footer>
  );
}
