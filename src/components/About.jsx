// import { FloatingDockDemo } from "./shared/FloatingBottom";
import { TimelineDemo } from "./shared/TimeJourney";
import TextHoverEffect from "./ui/text-hover-effect";

const About = () => {
  return (
    <div className="md:mx-40 mt-28" id="about">
      <div className="md:h-[16rem] h-[7rem] flex items-center justify-center" id="adventure">
        <TextHoverEffect text="Odyssey" />
      </div>
      <TimelineDemo />

      {/* <FloatingDockDemo /> */}
    </div>
  );
};

export default About;
