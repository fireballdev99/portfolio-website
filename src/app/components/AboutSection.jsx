"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc grid grid-cols-2 gap-2 xl:gap-4 xl:text-xl md:grid-cols-4  xl:grid-cols-3">
        <li className="flex mt-1">
          <Image
            src="/images/Skills/javascript.png"
            alt="JavaScript Icon"
            width={50}
            height={50}
            className="w-6 h-6 mx-2"
          />
          JavaScript
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/react.png"
            alt="React Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          React
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/next.png"
            alt="Next Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          Next
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/nodejs.png"
            alt="Node Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          Node.js
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/express.png"
            alt="Express Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          Express
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/mysql.png"
            alt="Mysql Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          MySQL
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/python.png"
            alt="Python Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          Python
        </li>
        <li className="flex mt-1">
          <Image
            src="/images/Skills/flask.png"
            alt="Flask Logo"
            width={50}
            height={50}
            className="w-6 h-6 mx-2 rounded"
          />
          Flask
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 xl:text-xl">
        <li className="mb-4">Born to Dev</li>
        <li className="mb-4">Rangsit University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 xl:text-xl">
        <li className="mb-4">Udemy Fullstack Developer Course</li>
        <li className="mb-4">Udemy ReactJS Developer Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          className="rounded-lg"
          alt="About me image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a dedicated full stack web developer enthusiastic about crafting
            engaging and adaptable web solutions. Proficient in JavaScript,
            React, Node.js, Express, MySQL, Python, HTML, and CSS, I thrive on
            continuous learning and am eager to broaden my expertise.
            Collaborating with others to innovate and build exceptional
            applications is what excites me.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
