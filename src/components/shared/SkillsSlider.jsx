import React from "react";
import { skills } from "../../constants";
import InfiniteScroller from "../ui/infiniteScroller";

const ScrollerContent = () => {
  return (
    <div className="">
      <InfiniteScroller speed="slow">
        <div className="flex flex-nowrap items-center gap-16 md:mb-20">
          {skills.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center w-1/3 md:w-auto gap-4">
                {/* Adjusted the flexbox to align the image and text horizontally */}
                <img
                  src={company.img}
                  alt={`${company.title} logo`}
                  className="w-7 h-7 md:w-9 md:h-9" // Adjust size as needed
                />
                <h1 className="text-center text-lg md:text-xl whitespace-nowrap">
                  {company.title}
                </h1>
              </div>
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroller>
    </div>
  );
};

export default ScrollerContent;
