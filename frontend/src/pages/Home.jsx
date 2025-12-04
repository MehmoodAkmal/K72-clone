import React from "react";
import Video from "../components/Home/Video";
import HomeTop from "../components/Home/HomeTop";
import HomeBottom from "../components/Home/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="fixed h-screen w-screen">
        <Video />
      </div>
      <div className="relative h-screen w-screen flex flex-col justify-between pb-3 overflow-hidden">
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
