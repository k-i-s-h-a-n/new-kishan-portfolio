import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import reactLogo from "../../assets/reactLogo1.png";
import nodeLogo from "../../assets/nodeLogo.png";
import expressLogo from "../../assets/expressLogo.png";
// Array of skills to be displayed
const skills = [
  { name: "React", imgSrc: reactLogo},
  { name: "Node.js", imgSrc: nodeLogo },
  { name: "JavaScript", imgSrc: expressLogo },
  // Add more skills as needed
];

export function LampDemo() {
  return (
    <LampContainer>
      {/* Horizontal scrolling container */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["100%", "-100%"] }}  // Start from the right, move to the left
          transition={{
            repeat: Infinity,  // Infinite loop
            duration: 15,      // Duration for one loop
            ease: "linear",    // Smooth linear motion
          }}
        >
          {/* Duplicate the skills array to create a seamless loop effect */}
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Skill image */}
              <img src={skill.imgSrc} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20" />
              {/* Skill name */}
              <span className="text-center text-sm mt-2 text-slate-500">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </LampContainer>
  );
}
