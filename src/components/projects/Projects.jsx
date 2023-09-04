import React, { useEffect, useState } from "react";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web6 from "/web6.png";
import ProjectCard from "./ProjectCard";
import H3 from "../../layout/H3";

import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: web1,
      title: "DCI final project",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "React, CSS, Tailwind",
    },

    {
      id: 2,
      src: web2,
      title: "Poker logic",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "JS",
    },

    {
      id: 3,
      src: web6,
      title: "Alpaca farm",
      desription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, mollitia!",
      tech: "CSS",
    },
  ];

  //

  useEffect(() => {
    const fetchData = async () => {
      const deliveryClient = createDeliveryClient({
        environmentId: "884d9861-fd02-0038-2538-11cd414fd5b3",
      });

      const response = await deliveryClient
        .items()
        .type("projects")
        .toPromise();
      console.log(response.data.items);
      setProjectsData(response.data.items);
    };
    fetchData();
    console.log("text");
  }, []);

  const [projectsData, setProjectsData] = useState();
  console.log("STATE", projectsData);

  //

  return (
    <section id="projects">
      <div className=" text-center">
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
      {/* <div className="flex flex-wrap justify-center gap-10 p-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center gap-10 p-10">
        {projectsData &&
          projectsData
            .sort((a, b) => a.elements.order.value - b.elements.order.value)
            .map((project) => (
              <ProjectCard
                key={project.system.id}
                id={project.system.id}
                src={project.elements.image.value[0].url}
                title={project.elements.title.value}
                desription={project.elements.description.value}
                tech={project.elements.technologies.value}
                order={project.elements.order.value}
              />
            ))}
      </div>
    </section>
  );
};

export default Projects;
