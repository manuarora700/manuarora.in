import React from "react";

const ProjectFCC = ({ link, image, title, date }) => {
  return (
    <a href={link} className=" w-3/4 sm:w-1/2 mb-10 min-h-72" target="__blank">
      <div className=" flex-shrink-0 rounded-lg shadow-xl shadow-gray-500/20 dark:shadow-blue-500/20 overflow-hidden ">
        <div className="relative overflow-hidden h-40  w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <img
            src={image}
            className="transition hover:scale-125 duration-[2000ms] absolute inset-x-0 top-4 rounded-md w-[90%] mx-auto"
          />
        </div>
        <div className="flex flex-col justify-between mx-4 my-4 ">
          <h2 className="font-bold text-lg mb-14 text-gray-700">{title}</h2>
          <p className="text-sm font-light">{date}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectFCC;
