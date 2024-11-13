import { useEffect, useRef, useState } from "react";
import { cardsData } from "../../../constants";
import ProjectCard from "../ProjectCard";
import "./CardStyles.css";

const ProjectCardsCollage = () => {
  const [zoomIndex, setZoomIndex] = useState(null);
  const cardRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setZoomIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe each card element
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      // Unobserve each card element during cleanup
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [cardRefs]); // Include cardRefs in the dependency array


  return (
    <div className="md:mt-0 mt-4">
      <div className="overflow-x-auto flex space-x-4 py-4 md:grid md:grid-cols-3 md:gap-6 md:ml-36 md:space-x-0 px-4 md:px-0 md:pl-7 md:py-8 md:overflow-x-hidden no-underline">
        {cardsData.map((cardData, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`transform transition-transform duration-500 ease-in-out ${
              index % 2 === 0 ? "-rotate-6" : "rotate-6"
            } flex-shrink-0 w-64 card ${
              zoomIndex === index ? "card-zoom-in" : "card-zoom-out"
            }`}
          >
            <ProjectCard {...cardData} />
          </div>
        ))}
      </div>

      {/* Swipe Indicator */}
      <div className="flex mt-5 justify-center space-x-2 py-2 md:hidden">
        {cardsData.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              zoomIndex === index ? "bg-blue-500 w-4 h-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardsCollage;
