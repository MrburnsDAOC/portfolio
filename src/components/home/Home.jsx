import React from "react";
// import avatar from "/avatar.jpg";
import avatar from "/avatar_linkedin.jpg";
import H2 from "../../layout/H2";
import Resumee from "../../assets/2023_09_25_CV.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center max-w-screen-lg mx-auto"
    >
      <div className="text-center pb-10 mt-32 ">
        <h1 className=" uppercase font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-300 dark:to-teal-400 md:text-8xl">
          David Märkisch
        </h1>
        <H2>Developer</H2>
        <p className="text-md pt-5 leading-8 ">
          Web Developer with 5+ years of experience in online marketing,
          including as a co-founder. Currently participant in a one-year
          full-time training for web development (MERN stack).
        </p>
        <p className="text-md pt-5 leading-8 ">
          Looking for new challenges in web development to be able to contribute
          and grow together with a team in a solution-oriented way.
        </p>

        <a className="max-w-fit mx-auto mt-2" href={Resumee} target="_blank">
          <button className="uppercase font-bold mx-auto max-w-fit rounded-md p-2 px-10 mt-4 text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-600 hover:scale-105 duration-200">
            CV
          </button>
        </a>
      </div>

      <img
        src={avatar}
        alt="devdave"
        className=" border-cyan-500 dark:border-cyan-300 border-2 h-52 rounded-full mx-auto"
        title="avatar-placeholder"
      />
    </section>
  );
};

export default Home;
