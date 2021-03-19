import React from "react";
import Styles from "./Gradient.module.css";

export default function index() {
  return (
    <div className="container text-black flex items-center justify-center mx-auto h-screen">
      <h1
        className={`text-8xl font-extrabold gradient-text ${Styles.gradientText}`}
      >
        TEXT UI GRADIENT
      </h1>
    </div>
  );
}
