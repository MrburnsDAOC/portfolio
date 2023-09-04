import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={darkMode ? "dark" : ""}>
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 fixed w-full">
        <nav className="uppercase py-8 flex justify-between">
          <h1 className="cursor-pointer text-3xl hover:scale-110 duration-150">
            <a href="https://github.com/MrburnsDAOC" target="_blank">
              <TbBrandGithubFilled />
            </a>
          </h1>
          <ul className="flex items-center gap-8">
            <li className="hover:scale-110 duration-500">
              <AnchorLink
                className="font-bold px-4 py-2 cursor-pointer"
                href="#home"
              >
                Home
              </AnchorLink>
            </li>

            <li className="hover:scale-110 duration-500">
              <AnchorLink
                className="font-bold px-4 py-2 cursor-pointer"
                href="#projects"
              >
                Projects
              </AnchorLink>
            </li>
            <li className="hover:scale-110 duration-500">
              <AnchorLink
                className="font-bold px-4 py-2 cursor-pointer"
                href="#experience"
              >
                Experience
              </AnchorLink>
            </li>

            <li className="hover:scale-110 duration-150">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl block dark:hidden"
              />
              <BsFillSunFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl  hidden dark:block "
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
