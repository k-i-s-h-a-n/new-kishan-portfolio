
import ScrollerContent from "./shared/SkillsSlider";
import SpotlightPreview from "./shared/SpotlightPreview";


const Hero = () => {
  return (
    <div className="md:mx-40">
      <SpotlightPreview />
      <div className="overflow-x-hidden">
        <ScrollerContent />
      </div>
    </div>
  );
};

export default Hero;
