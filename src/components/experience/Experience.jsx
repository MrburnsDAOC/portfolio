import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import github from "../../assets/github.svg";

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
  ];

  return (
    <section id="experience">
      <div className=" text-center">
        <h3 className=" uppercase pt-32 pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500  dark:from-cyan-300 dark:to-teal-400 text-3xl sm:text-5xl">
          Experience
        </h3>
        <p className="text-md py-2 leading-8">
          These are the technologies I have worked with so far.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-8 px-12 pt-8 pb-32  text-center md:grid-cols-3 md:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md py-2 rounded-lg hover:scale-105 duration-700 ${style}`}
          >
            <img src={src} alt={title} className="w-20 mx-auto" />
            <p className="mt-4 font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
