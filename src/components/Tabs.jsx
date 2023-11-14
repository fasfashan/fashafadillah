import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Murni: [
      {
        id: 1,
        title: "Web Designer",
        date: "Mar 2022 - Present",
        commentCount: 5,
        shareCount: 2,
        content:
          "At Murni, I create designs and also develop websites. I collaborate with content writers to build websites or landing pages. Here, my HTML, CSS, and JS skills are honed further because in some projects, the tech stack used does not involve WordPress.",
      },
    ],
    "Kiki Tech": [
      {
        id: 1,
        title: "UI Designer",
        date: "Sep 2021 - Feb 2022",
        commentCount: 29,
        shareCount: 16,
        content:
          "Working at Kiki was my first experience with remote work. There, I assisted in creating design documentation for the Kiki application, as the previous design had been done by a freelancer. Additionally, I also built the company profile website using WordPress.",
      },
    ],
    "Gagas Studio": [
      {
        id: 1,
        title: "Web Designer",
        date: "Mar 2020 - Sep 2021",
        commentCount: 9,
        shareCount: 5,
        content:
          "Gagas Studio marks the beginning of my career journey. As it is an agency, and most of its clients are SMEs, I assisted SMEs in creating websites using WordPress.",
      },
    ],
  });

  return (
    <div className="w-full  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-lg  border border-neutral-400 p-3">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg  py-3 text-sm  leading-5 text-emerald-600 font-semibold",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none ",
                  selected
                    ? "bg-emerald-500 text-white "
                    : "text-neutral-400  hover:bg-emerald-50 transition-all hover:text-neutral-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "border border-neutral-400 rounded-lg p-3",
                "ring-white/60 "
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative space-y-3 p-3 ">
                    <h3 className=" font-medium text-neutral-900">
                      {post.title} &middot; {post.date}
                    </h3>
                    <hr className="border-1 border-neutral-400" />
                    <p className="text-base text-neutral-500  leading-loose ">
                      {post.content}
                    </p>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
