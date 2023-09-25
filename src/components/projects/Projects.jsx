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
      github: "https://github.com/MrburnsDAOC?tab=repositories",
      title: "DCI final project",
      desription:
        "Currently working on my final DCI group project with three of my fellow colleagues. More information coming soon!",
      tech: "React, CSS, Tailwind",
    },

    {
      id: 2,
      src: projectPoker,
      github: "https://github.com/MrburnsDAOC/carddeck",
      title: "Poker logic",
      desription:
        "Some card logic like picking a random card from a deck of cards, shuffling the deck and giving a set number of players two cards each.",
      tech: "JS",
    },

    {
      id: 3,
      src: projectAlpaca,
      github: "https://github.com/MrburnsDAOC/alpaca",
      title: "Alpaca farm",
      desription:
        "Project to practice and learn CSS, working together in a small team on github as well as implementing of the design on basis the of a high-fidelity wireframe.",
      tech: "HTML, CSS, Sass",
    },
  ];

  return (
    <section id="projects">
      <div className=" text-center  max-w-screen-lg mx-auto">
        <H3>Projects</H3>
        <p className="text-md py-2 leading-8 ">
          Here are some of my latest projects.
        </p>
        <p className="text-md py-2 leading-8 ">
          If you are interested in the details of any of the showcased projects
          simply click the card to view the given project on GitHub.
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
