/* eslint-disable react/no-unescaped-entities */

import "../../index.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-surface mt-40">
      <div className="max-w-6xl m-auto p-5 py-20 space-y-6">
        <h2 className="md:text-5xl md:leading-tight text-2xl lg:max-w-4xl font-light ">
          I'm available for{" "}
          <span className="font-medium text-primary"> freelance projects </span>{" "}
          —feel free to initiate a project and let's explore how we can
          collaborate.
        </h2>
        <div>
          <a
            className="bg-primary hover:bg-opacity-90 rounded-lg text-white shadow-xs px-4 py-2"
            href="mailto:pasapadilah1410@gmail.com"
          >
            Get in touch
          </a>
        </div>
        <p className="">© {currentYear} Fasha Fadillah. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
