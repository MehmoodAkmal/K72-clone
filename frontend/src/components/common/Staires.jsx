import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Staires = ({ children }) => {
  const currantPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      gsap.set(stairParentRef.current, { display: "block" });
      gsap.set(".stair", { height: "100%", y: 0 });

      gsap.set(pageRef.current, { opacity: 0 });

      const tl = gsap.timeline();

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
        duration: 0.9,
      });

      tl.to(
        ".stair",
        {
          y: "100%",
          stagger: {
            amount: -0.25,
          },
          duration: 0.9,
        },
        "-=0.3"
      );

      tl.to(
        pageRef.current,
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=0.4"
      );

      tl.to(stairParentRef.current, {
        display: "none",
      });
    },
    { dependencies: [currantPath], scope: stairParentRef }
  );

  return (
    <>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0 hidden"
      >
        <div className="h-full w-full flex z-20 top-0">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default Staires;
