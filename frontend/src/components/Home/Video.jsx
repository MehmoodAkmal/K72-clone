import React from "react";

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
        src="/bg.mp4"
      ></video>
    </div>
  );
};

export default Video;
