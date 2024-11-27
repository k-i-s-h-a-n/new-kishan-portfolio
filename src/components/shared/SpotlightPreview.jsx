import { Spotlight } from "../ui/spotlight";

const SpotlightPreview = () => {
  return (
    <div className="h-[30rem] md:h-[30rem] -mb-16 md:-mb-0 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Kishan Kumar <br /> a full stack developer.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        I'm a Full Stack Developer with 2+ years of experience in building web applications using Python, Django, and core web technologies. I handle both front-end and back-end, with deployments on EC2 and aaPanel.
        </p>
      </div>
    </div>
  );
};

export default SpotlightPreview;
