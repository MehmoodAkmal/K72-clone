import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="flex items-center justify-center gap-5 font-[font2] text-white">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full h-32 flex items-center justify-center px-12 border-white uppercase">
        <Link className="text-[7vw] mt-5" to="/work">
          Work
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full h-32 flex items-center justify-center px-12 border-white uppercase">
        <Link className="text-[7vw] mt-5" to="/agency">
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
