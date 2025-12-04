import { useGSAP } from "@gsap/react";
import Video from "../Home/Video";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/navContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenNav = useRef(null);
  const navlinks = useRef(null);
  const tl = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  function gsapAnimation() {
    tl.current = gsap.timeline({ paused: true });
    tl.current.from(".stairing", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.current.from(fullNavLinksRef.current, {
      opacity: 0,
    });
    tl.current.from(".links", {
      opacity: 0,
      rotateX: 45,
      stagger: {
        amount: 0.3,
      },
    });
  }

  useGSAP(() => {
    gsapAnimation();
  });

  useGSAP(
    function () {
      if (navOpen) {
        gsap.to(".fullScreenNav", {
          display: "block",
        });
        tl.current.play();
      } else {
        tl.current.reverse().then(() => {
          gsap.to(".fullScreenNav", {
            display: "none",
          });
        });
      }
    },
    {
      dependencies: [navOpen],
    }
  );
  return (
    <div
      ref={fullScreenNav}
      className={`${
        navOpen ? "block" : ""
      } fullScreenNav w-full overflow-hidden absolute text-white z-[9999]`}
    >
      <div className="h-screen w-full fixed">
        <div className="h-screen w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="w-full h-[15vh] absolute flex items-start p-3 justify-between">
          <img src="/whitelogo.svg" className="w-32" />
          <div
            onClick={() => setNavOpen(false)}
            className="h-full w-[8vw] flex items-center justify-center cursor-pointer group"
          >
            <div className="w-[8vw] h-1 rounded-full bg-white rotate-45 absolute group-hover:bg-[#D3FD50] transition-colors duration-300"></div>
            <div className="w-[8vw] h-1 rounded-full bg-white -rotate-45 absolute group-hover:bg-[#D3FD50] transition-colors duration-300"></div>
          </div>
        </div>
        <div ref={navlinks} className="pt-[9vw]">
          <div className="links origin-top border-t border-white/50 h-[7.5vw] relative group cursor-pointer">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-none group-hover:opacity-0 transition-opacity duration-300">
              Work
            </h1>
            <div className="absolute top-0 flex bg-[#D3FD50] h-[7.5vw] text-black overflow-hidden w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  sea everything
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
            </div>
          </div>
          <div className="links origin-top border-t border-white/50 h-[7.5vw] relative group cursor-pointer">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-none group-hover:opacity-0 transition-opacity duration-300">
              agency
            </h1>
            <div className="absolute top-0 flex bg-[#D3FD50] h-[7.5vw] text-black overflow-hidden w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  know us
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
            </div>
          </div>
          <div className="links origin-top border-t border-white/50 h-[7.5vw] relative group cursor-pointer">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-none group-hover:opacity-0 transition-opacity duration-300">
              contact
            </h1>
            <div className="absolute top-0 flex bg-[#D3FD50] h-[7.5vw] text-black overflow-hidden w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  send us a fax
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
            </div>
          </div>
          <div className="links origin-top border-y border-white/50 h-[7.5vw] relative group cursor-pointer">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-none group-hover:opacity-0 transition-opacity duration-300">
              blog
            </h1>
            <div className="absolute top-0 flex bg-[#D3FD50] h-[7.5vw] text-black overflow-hidden w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
              <div className="moveX uppercase flex items-center justify-center gap-4">
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
                <h2 className="text-[7vw] font-[font2] whitespace-nowrap">
                  read articles
                </h2>
                <div className="rounded-full h-[5.5vw] w-[14vw] overflow-hidden flex-shrink-0">
                  <Video />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
