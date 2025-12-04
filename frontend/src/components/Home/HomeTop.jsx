import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="text-white font-[font1] uppercase text-[9.5vw] leading-44 pt-2 flex flex-col justify-center">
      <div className="text-center flex justify-center items-center">
        The spark for
      </div>
      <div className="text-center flex justify-center items-center">
        all
        <div className="h-[16vh] w-[36vh] rounded-full overflow-hidden -mt-3">
          <Video />
        </div>
        things
      </div>
      <div className="text-center flex justify-center items-center">
        creative
      </div>
    </div>
  );
};

export default HomeTop;
