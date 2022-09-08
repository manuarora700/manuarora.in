import React from "react";

const ProjectFCC = ({ link, image, title, date }) => {
  return (
    <a href={link} className=" w-full mb-10  h-full" target="__blank">
      <div className="relative overflow-hidden h-52 flex items-center justify-center rounded-md w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <img
          src={image}
          className="transition hover:scale-110 duration-[4000ms]  rounded-md w-[90%] mx-auto"
        />
      </div>
      <p className="text-sm font-light py-2">{date}</p>
      <div className="flex flex-col justify-between ">
        <h2 className="font-bold text-lg text-gray-700">{title}</h2>
      </div>
    </a>
  );
};

export default ProjectFCC;
