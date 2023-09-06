import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

const Header = ({ darkMode, setDarkMode }) => {
  const navElements = [
    { id: 1, href: "#home", title: "Home" },
    { id: 2, href: "#projects", title: "Projects" },
    { id: 3, href: "#experience", title: "Experience" },
  ];

  return (
    <header className={darkMode ? "dark" : ""}>
      <div className="z-50 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 fixed w-full ">
        <nav className="uppercase py-8 flex justify-between">
          <span className="cursor-pointer text-3xl hover:scale-110 duration-150">
            <a href="https://github.com/MrburnsDAOC" target="_blank">
              <TbBrandGithubFilled />
            </a>
          </span>
          <ul className="flex items-center gap-2 md:gap-10 lg:gap-20">
            {navElements.map((navElement) => {
              return (
                <li
                  key={navElement.id}
                  className="hover:scale-110 duration-500"
                >
                  <AnchorLink
                    className="font-bold px-4 py-2 cursor-pointer"
                    href={navElement.href}
                  >
                    {navElement.title}
                  </AnchorLink>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center">
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
