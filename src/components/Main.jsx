import React from "react";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Home from "./home/Home";

const Main = ({ darkMode }) => {
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className=" min-w-fit bg-white text-gray-900 px-10 dark:bg-gray-900 dark:text-white">
        <Home />
        <Projects />
        <Experience />
      </div>
    </main>
  );
};

export default Main;
