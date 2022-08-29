import React from "react";

const TestimonialCard = ({ card }) => {
  const rotateValues = ["2deg", "-2deg", "0deg", "3deg", "-3deg"];

  const getRotationValue = () => {
    let val = rotateValues[Math.floor(Math.random() * rotateValues.length)];
    return `rotate(${val})`;
  };
  return (
    <div
      style={{ transform: getRotationValue() }}
      className="card min-w-xl w-96 rounded-xl shadow bg-white p-4 text-sm dark:bg-slate-800"
    >
      <svg
        fill="currentColor"
        width="45"
        height="36"
        className="text-[#cbd5e1] dark:text-gray-700 mb-4"
      >
        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
      </svg>
      <h4 className="mb-4 text-gray-600 dark:text-gray-300">
        {card?.testimonial}
      </h4>
      <div className="card-bottom">
        {/* <img src={card?.avatar} /> */}
        <p className="font-bold">{card?.name}</p>
        <p className="font-bold text-gray-500 dark:text-gray-400">
          {card?.company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
