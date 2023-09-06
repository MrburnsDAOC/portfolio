import React from "react";
import H4 from "../../layout/H4";
import H5 from "../../layout/H5";

const ProjectCard = ({ id, src, title, tech, desription }) => {
  return (
    <div
      key={id}
      className="shadow-lg shadow-gray-500 rounded-xl max-w-lg overflow-hidden cursor-pointer lg:max-w-sm"
      // hover:scale-105 duration-500
    >
      <img src={src} alt={title} className=" drop-shadow-sm" />
      <div className="p-5">
        <H4>{title}</H4>
        <p>{desription}</p>
        <H5>{tech}</H5>
      </div>
    </div>
  );
};

export default ProjectCard;
