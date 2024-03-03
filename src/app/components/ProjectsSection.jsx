"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectsData = [
  {
    id: 1,
    title: "ImagAI Imagnify with AI TypeScript",
    description:
      "Full Stack Next.js, Stripe, Cloudininary, Shadcn, Clerk This is a simple Utils of image website using Next.js with TypeScript",
    image: "/images/projects/ImagAI.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fireballdev99/Imagai.git",
    previewUrl: "https://imagai.vercel.app/",
  },
  {
    id: 2,
    title: "Simple Portfolio Space Theme Website",
    description:
      "This is a simple Portfolio Space Theme Website built using Next.js with TypeScript, Three.js, TailwindCss, Framer-Motion",
    image: "/images/projects/portfolio-space.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fireballdev99/portfolio-spacetheme",
    previewUrl: "https://space-portfolio-alpha-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Simple Portfolio Website Next.js",
    description:
      "This is a simple Portfolio Website built using Next.js with TailwindCss, Framer-Motion, EmailJs and React Type Animation ",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fireballdev99/portfolio-website",
    previewUrl: "https://portfolio-gamma-nine-39.vercel.app/",
  },
  {
    id: 4,
    title: "Anime Vault Simple Fetch API Website",
    description:
      "This is a simple fetch API website built using Next.js with TypeScript, TailwindCss and Framer-Motion API from SHIKIMORI.",
    image: "/images/projects/Anime-vault.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fireballdev99/anime-vault",
    previewUrl: "https://anime-vault-gamma-one.vercel.app/",
  },
  {
    id: 5,
    title: "Simple Project",
    description: "This is a simple movie website built using ... . ",
    image: "/images/projects/portfolio-space.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // Element is in view
      console.log("Element is in view");
    } else {
      // Element is not in view
      console.log("Element is not in view");
    }
  }, [inView]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2
        id="projects"
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Web"}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Mobile"}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
