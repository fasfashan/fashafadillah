/* eslint-disable react/no-unescaped-entities */

import "../../index.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-neutral-100 mt-20">
      <div className="max-w-5xl m-auto p-5">
        <h2 className="md:text-5xl md:leading-tight text-2xl font-light py-20">
          I'm available for{" "}
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-b from-teal-300 to-teal-800">
            {" "}
            freelance projects{" "}
          </span>{" "}
          —feel free to initiate a project and let's explore how we can
          collaborate.
        </h2>

        <p className="pt-8 border-t border-neutral-300  font-light">
          © {currentYear} Fasha Fadillah. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
