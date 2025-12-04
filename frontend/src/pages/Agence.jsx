import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 216px",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] rounded-2xl overflow-hidden absolute top-54 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="/img1.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[58vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-6">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
