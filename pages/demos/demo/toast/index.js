import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function index() {
  const oneClick = () => {
    toast.success("🚀 Here is your notification toast");
  };
  const twoClick = () => {
    toast.error("🚀 Here is your error notification toast");
  };
  const threeClick = () => {
    toast("🚀 Here is your normal notification toast");
  };
  return (
    <div>
      <ToastContainer />
      <div className="container mx-auto flex flex-row justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-5 my-10">
          <button
            className="text-gray-50 bg-gray-900 px-2 py-4 rounded-md"
            onClick={oneClick}
          >
            👋 Click me!
          </button>
          <button
            className="text-gray-50 bg-gray-900 px-2 py-4 rounded-md"
            onClick={twoClick}
          >
            👋 Click me!
          </button>
          <button
            className="text-gray-50 bg-gray-900 px-2 py-4 rounded-md"
            onClick={threeClick}
          >
            👋 Click me!
          </button>
        </div>
      </div>
    </div>
  );
}
