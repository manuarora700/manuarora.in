import React from "react";
import { useState, useEffect, useRef } from "react";

export default function VideoDemo({ src, width, label = false }) {
  const [speed, setSpeed] = useState(parseFloat(4.0));

  // useEffect(() => {}, [speed]);
  const videoRef = useRef();

  const setPlayback = () => {
    videoRef.current.playbackRate = parseFloat(speed);
    console.log(videoRef.current.playbackRate);
  };

  const changePlayback = (e) => {
    setSpeed(parseFloat(e.target.value));
    videoRef.current.playbackRate = parseFloat(speed);
  };
  return (
    <div className="flex flex-col justify-center">
      <div>
        <video
          ref={videoRef}
          onCanPlay={setPlayback}
          playsInline
          src={src}
          muted
          autoPlay
          loop
          width={width}
        ></video>
      </div>
      {label && (
        <label htmlFor="video-speed" className="mt-8">
          🐢{" "}
          <input
            type="range"
            min="0.8"
            max="4.2"
            step="0.10"
            value={speed}
            name="video-speed"
            onChange={(e) => changePlayback(e)}
          />{" "}
          🐇
        </label>
      )}
    </div>
  );
}
