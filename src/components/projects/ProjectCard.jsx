import React from "react";

const ProjectCard = ({ id, src, title, tech, desription }) => {
  return (
    <div
      key={id}
      className="shadow-lg  shadow-gray-500 rounded-xl max-w-xl overflow-hidden cursor-pointer lg:max-w-sm"
    >
      <img src={src} alt={title} className=" border-b-2" />
      <div className="p-5">
        <h3 className="uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-300 dark:to-teal-400 text-lg py-2 pt-8 ">
          {title}
        </h3>
        <p>{desription}</p>
        <h4 className="italic pt-2">{tech}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
