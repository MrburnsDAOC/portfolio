import React from "react";

import projectDci from "/project-dci.png";
import projectPoker from "/project-poker.png";
import projectAlpaca from "/project-alpaca.png";
import ProjectCard from "./ProjectCard";

import H3 from "../../layout/H3";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: projectDci,
      title: "DCI final project",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "React, CSS, Tailwind",
    },

    {
      id: 2,
      src: projectPoker,
      title: "Poker logic",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "JS",
    },

    {
      id: 3,
      src: projectAlpaca,
      title: "Alpaca farm",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "HTML, CSS, Sass",
    },
  ];

  return (
    <section id="projects">
      <div className=" text-center  max-w-screen-lg mx-auto">
        <H3>Projects</H3>
        <p className="text-md py-2 leading-8 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          voluptas quisquam neque quas quam temporibus? Minima voluptatem
          accusamus voluptas at?
        </p>
        <p className="text-md py-2 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, hic.
        </p>
      </div>

      {/* ---- CARDS */}
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
