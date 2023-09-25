import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-10 font-semibold">
      <p className="max-w-fit mx-auto">
        <AnchorLink className="font-bold px-4 py-2 cursor-pointer" href="#home">
          <AiOutlineCopyrightCircle className="inline" /> 2023 David Märkisch
        </AnchorLink>
      </p>
    </div>
  );
};

export default Footer;
