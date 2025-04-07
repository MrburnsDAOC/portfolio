import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import H3 from '../../layout/H3';

import Contentstack from 'contentstack';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize the Contentstack SDK
    const Stack = Contentstack.Stack({
      api_key: 'blt42d8244abed63102',
      delivery_token: 'cs2720ba413ceb25dc7e33cb16',
      environment: 'live',
    });

    // fetch from Contentstack
    const fetchData = async () => {
      try {
        const Query = Stack.ContentType('project') // all projects from Contentstack
          .Query()
          .toJSON();
        const result = await Query.find();
        // console.log(result[0]);

        if (result && result[0]) {
          setProjectsData(result[0]);
        } else {
          setProjectsData([]);
        }
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error('Error fetching content:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects">
      <div className=" text-center  max-w-screen-lg mx-auto">
        <H3>Projects</H3>
        <p className="text-md py-2 leading-8 ">
          Here are some of my latest projects.
        </p>
        <p className="text-md py-2 leading-8">
          If you are interested in the details of any of the showcased projects
          simply click the card to view the given project on GitHub.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 p-10">
        {projectsData &&
          projectsData
            .sort((a, b) => a.position - b.position)
            .map((project) => (
              <ProjectCard
                key={project.uid}
                github={project.github.href}
                id={project.uid}
                src={project.image.url}
                title={project.title}
                desription={project.description}
                tech={project.tech}
                order={project.position}
              />
            ))}
      </div>
    </section>
  );
};
export default Projects;
