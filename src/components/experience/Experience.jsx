import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import github from "../../assets/github.svg";
import bootstrap from "../../assets/bootstrap.svg";
import sass from "../../assets/sass.svg";
import H3 from "../../layout/H3";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },

    {
      id: 3,
      src: js,
      title: "JS",
      style: "shadow-yellow-400",
    },

    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-400",
    },

    {
      id: 5,
      src: tailwindcss,
      title: "Tailwind",
      style: "shadow-teal-400",
    },

    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },

    {
      id: 8,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
  ];

  return (
    <section id="experience">
      <div className=" text-center ">
        <H3>Experience</H3>

        <p className="text-md py-2 leading-8">
          These are the technologies I have worked with so far.
        </p>
      </div>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-2 gap-8 px-12 pt-8 pb-32 text-center md:grid-cols-3 md:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
            <img src={src} alt={title} className="w-20 mx-auto p-2" />
            <p className="mt-4 font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
