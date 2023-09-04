import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";

const Header = ({ darkMode, setDarkMode }) => {
  const navElements = [
    { href: "#home", title: "Home" },
    { href: "#projects", title: "Projects" },
    { href: "#experience", title: "Experience" },
  ];

  return (
    <header className={darkMode ? "dark" : ""}>
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 fixed w-full">
        <nav className="uppercase py-8 flex justify-between">
          <span className="cursor-pointer text-3xl hover:scale-110 duration-150">
            <a href="https://github.com/MrburnsDAOC" target="_blank">
              <TbBrandGithubFilled />
            </a>
          </span>
          <ul className="flex items-center gap-8">
            {navElements.map((navElement) => {
              return (
                <li className="hover:scale-110 duration-500">
                  <AnchorLink
                    className="font-bold px-4 py-2 cursor-pointer"
                    href={navElement.href}
                  >
                    {navElement.title}
                  </AnchorLink>
                </li>
              );
            })}

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
