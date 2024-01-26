import React from "react";

import projectDachau from "/tierschutzverein-dachau.png";
import projectPortfolio from "/project-portfolio.png";
import projectAlpaca from "/project-alpaca.png";
import ProjectCard from "./ProjectCard";

import H3 from "../../layout/H3";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: projectDachau,
      github: "https://github.com/MrburnsDAOC/dci-final-project",
      title: "Tierschutzverein Dachau",
      desription:
        "For our DCI final group project we redesigned the homepage of Tierschutz Dachau, optimising it for mobile use as well.",
      tech: "React, CSS, Tailwind",
    },
    {
      id: 2,
      src: projectPortfolio,
      github: "https://github.com/MrburnsDAOC/portfolio",
      title: "My portfolio page",
      desription:
        "This very portfolio you are on right now. Feel free to take a look into the code provided via the link in the headline!",
      tech: "JS, React, Tailwind",
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
