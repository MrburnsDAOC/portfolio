import React from "react";

const H4 = ({ children }) => {
  return (
    <h4 className="uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-300 dark:to-teal-400 text-lg py-2 pt-8 ">
      {children}
    </h4>
  );
};

export default H4;
