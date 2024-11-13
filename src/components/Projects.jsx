
// import { HoverBorderGradientDemo } from "./shared/gradientButton"
import ProjectCardsCollage from "./shared/ProjectCollage/CardCollage"
import TextHoverEffect from "./ui/text-hover-effect"


const Projects = () => {
  return (
  <div className="md:mx-40 md:mt-0 mt-11" id="why me?">
    <div className="md:h-[16rem] h-[7rem] flex items-center justify-center">
      <TextHoverEffect text="WHY ME?" />
    </div>
     <ProjectCardsCollage />
     {/* <HoverBorderGradientDemo /> */}
    </div>
  )
}

export default Projects