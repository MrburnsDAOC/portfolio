import React from "react";

const H3 = ({ children }) => {
  return (
    <h3 className=" uppercase pt-32 pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500  dark:from-cyan-300 dark:to-teal-400 text-3xl sm:text-5xl">
      {children}
    </h3>
  );
};

export default H3;
