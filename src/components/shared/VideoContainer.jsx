import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiVolumeMute } from "react-icons/ci";
import { GoUnmute } from "react-icons/go";
import { AiOutlineExpandAlt } from "react-icons/ai";
import aviIntroVideo from "../../assets/introAvi.mp4"
const VideoContainer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const closeVideo = () => {
    setIsVisible(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed ${
        isExpanded
          ? "top-0 left-0 w-full h-full bg-opacity-90"
          : "bottom-5 right-5 rounded-lg p-2 shadow-lg w-44 md:w-80 z-50 h-64 md:h-auto left-0 md:left-auto"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="relative w-full h-full md:w-[300px] md:h-[200px]">
        <video
          src={aviIntroVideo}
          muted={isMuted}
          autoPlay
          loop
          className={`w-full h-full rounded-lg ${isExpanded ? "h-full" : ""}`}
          style={{ objectFit: "cover" }} 
        />
        <button
          onClick={toggleMute}
          className="absolute top-2 left-2 bg-gray-700 text-white text-xs p-1 rounded-md"
        >
          {isMuted ? <CiVolumeMute /> : <GoUnmute />}
        </button>
        <button
          onClick={closeVideo}
          className="absolute top-2 right-2 bg-gray-700 text-white text-xs p-1 rounded-md"
        >
          <IoMdClose />
        </button>

        <button
          onClick={toggleExpand}
          className="absolute bottom-2 left-2 bg-gray-700 text-white text-xs p-1 rounded-md md:hidden"
        >
          <AiOutlineExpandAlt />
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
