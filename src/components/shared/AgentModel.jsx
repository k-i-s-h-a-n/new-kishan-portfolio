import PropTypes from "prop-types";
import agentGif from "../../../src/assets/agent.gif";
import { RiCloseFill } from "react-icons/ri";
import { FaClipboardCheck } from "react-icons/fa";
import { useState } from "react";

const AgentModel = ({ closeModel }) => {
  const couponCode = "CODEAVI12NOW";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); 
    setTimeout(() => closeModel(), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      {/* Modal Container */}
      <div
        className="relative flex flex-col items-center rounded-2xl p-6 max-w-sm w-full transition-transform duration-300 transform scale-95 animate-fade-in-up bg-gray-900"
        style={{
          borderRadius: "16px", // Rounded corners
          border: "4px solid transparent", // Transparent to allow gradient
          backgroundImage:
            "linear-gradient(black, black), linear-gradient(45deg, white, black, #FFD700)", // Updated layered gradient
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)", // Glowing effect
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => closeModel()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors duration-200"
        >
          <RiCloseFill size={28} />
        </button>

        {/* Agent Gif */}
        <div className="relative -mt-16 mb-4">
          <div className="w-32 h-32 rounded-full p-[2px] bg-gradient-to-r from-white via-black to-[#facc15]">
            <img
              src={agentGif}
              alt="Agent"
              className="w-full h-full rounded-full object-cover shadow-lg border-4 border-black bg-black"
            />
          </div>
        </div>

        {/* Funny & Special Text */}
        <div className="text-center text-white font-semibold mb-4">
          Copy the code to unlock the secrets!
        </div>

        {/* Cloud Message */}
        <div className={`relative w-full text-white font-bold text-xl p-4 rounded-lg shadow-inner border-dashed border-2 ${isCopied ? 'border-green-600' : 'border-gray-600'} flex justify-between items-center`}>
        <span className={`${isCopied ? 'text-green-600' : 'text-white'}`}>{isCopied ? "Copied Successfully!" : couponCode}</span>
          <button
            onClick={handleCopy}
            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 ml-2"
          >
            <FaClipboardCheck size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

AgentModel.propTypes = {
  closeModel: PropTypes.func.isRequired,
};

export default AgentModel;
