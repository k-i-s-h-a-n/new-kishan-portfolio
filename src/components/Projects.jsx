import ProjectCardsCollage from "./shared/ProjectCollage/CardCollage"
import TextHoverEffect from "./ui/text-hover-effect"

const Projects = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 mt-11 overflow-x-hidden" id="why me?">
      {/* Title Section with responsive height */}
      <div className="min-h-[5rem] sm:min-h-[7rem] md:h-[16rem] flex items-center justify-center">
        <TextHoverEffect text="WHY ME?" />
      </div>
      
      {/* Project cards collage */}
      <ProjectCardsCollage />
    </div>
  )
}

export default Projects
