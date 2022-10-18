import React from "react";

const Talks = ({ url, company, image, title, description }) => {
  return (
    <a
      href={url}
      className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-10"
      target="__blank"
    >
      <img src={image} className="rounded-md w-72 mb-4 md:mb-0" />
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-base md:text-xl tracking-tight text-black dark:text-white">
            {title}
          </h4>
          <p className="text-gray-500 dark:text-zinc-400 text-sm">
            {description}
          </p>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{company}</p>
      </div>
    </a>
  );
};

export default Talks;
