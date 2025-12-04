const ProjectCards = (props) => {
  return (
    <>
      <div className="w-1/2 h-full hover:rounded-4xl group cursor-pointer transition-all overflow-hidden relative flex items-center justify-center">
        <img
          src={props.image1}
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div className="absolute hidden group-hover:flex bg-black/50 h-full w-full items-center justify-center">
          <h1 className="border-2  transition-all h-[3vw] duration-150 border-white absolute font-[font2] text-[3vw] leading-none rounded-full px-8 text-white py-1 uppercase">
            view project
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-full hover:rounded-4xl group cursor-pointer transition-all overflow-hidden relative flex items-center justify-center">
        <img
          src={props.image2}
          className="w-full h-full object-cover object-center"
          alt=""
        />
        <div className="absolute hidden group-hover:flex bg-black/50 h-full w-full items-center justify-center">
          <h1 className="border-2  transition-all h-[3vw] duration-150 border-white absolute font-[font2] text-[3vw] leading-none rounded-full px-8 text-white py-1 uppercase">
            view project
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
