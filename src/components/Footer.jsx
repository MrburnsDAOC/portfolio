import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-10 italic font-semibold">
      <p>
        <AiOutlineCopyrightCircle className="inline" />
        <span> 2023, David Märkisch</span>
      </p>
    </div>
  );
};

export default Footer;
