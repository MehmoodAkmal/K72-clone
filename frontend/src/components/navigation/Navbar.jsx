import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavbarContext } from "../../context/navContext";

const Navbar = () => {
  const greenRef = useRef(null);
  const location = useLocation();
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  console.log("🚀 ~ Navbar ~ navOpen:", navOpen);

  return (
    <div className="flex fixed w-full top-0 items-start justify-between z-[9998]">
      <div className="p-3">
        <img
          src={location.pathname === "/" ? "/whitelogo.svg" : "/logo.svg"}
          className="w-28"
          alt="logo"
        />
      </div>
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          greenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          greenRef.current.style.height = "0%";
        }}
        className="h-14 w-[16vw] bg-black relative cursor-pointer"
      >
        <div
          ref={greenRef}
          className="bg-[#D3FD50] transition-all duration-300 h-0 w-full top-0 absolute"
        ></div>
        <div className="h-full w-full flex flex-col items-end justify-center gap-1 px-3 relative z-10 group">
          <div className="w-[20%] h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
          <div className="w-[10%] h-0.5 bg-white group-hover:bg-black transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
