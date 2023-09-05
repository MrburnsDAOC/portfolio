import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-10 font-semibold">
      <p className="max-w-fit mx-auto">
        <AiOutlineCopyrightCircle className="inline" />
        <span> 2023 David Märkisch</span>
      </p>
    </div>
  );
};

export default Footer;
