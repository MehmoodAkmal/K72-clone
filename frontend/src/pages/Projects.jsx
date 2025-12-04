import { useEffect } from "react";
import ProjectCards from "../components/projects/ProjectCards";
import { project } from "../components/common/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const cards = gsap.utils.toArray(".hero");

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        opacity: 0,
        pinSpacing: false,
        scrub: false,
      });

      gsap.from(card, {
        y: 200,
        opacity: 0,
        scale: 0.96,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 65%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="mb-[200vh]">
      <div className="mt-[55vh]">
        <h2 className="font-[font2] text-[11.2vw] uppercase px-3 flex items-start leading-none gap-8 h-[9.5vw]">
          Projects <span className="text-[2vw]">16</span>
        </h2>
      </div>

      <div className="lol">
        {project.map((item, index) => (
          <div
            key={index}
            className="hero w-full h-[800px] flex gap-4 mb-0 px-2"
          >
            <ProjectCards image1={item.image1} image2={item.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
