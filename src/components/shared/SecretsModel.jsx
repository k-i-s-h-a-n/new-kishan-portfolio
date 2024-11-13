import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUnlock, CiLock } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import "./sharedCss.css";

const SecretsModel = ({ closeModel , agentClose}) => {
  const [code, setCode] = useState(""); // Track input value
  const [isUnlocked, setIsUnlocked] = useState(false); // Track lock/unlock state
  const navigate = useNavigate(); // For navigation

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the code matches
    if (code === "CODEAVI12NOW") {
      setIsUnlocked(true); 
      setTimeout(() => {
        navigate("/secrets-details"); 
        closeModel();
        agentClose();
      }, 1500); 
    } else {
      alert("Incorrect Code. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="form-container md:w-[400px] w-[350px]">
        <button
          onClick={() => {
            closeModel();
            agentClose()
          }}
          className="text-gray-500 hover:text-gray-700 transition-all duration-300 flex justify-end"
          aria-label="Close"
        >
          <RiCloseFill size={24} />
        </button>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group text-center mb-6">
            <h2 className="text-xl">Enter the code please!</h2>
          </div>
          <div className="-mt-2">
            <input
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={handleCodeChange}
              required
              className="text-black bg-white border border-gray-300 rounded-md p-2 w-full max-w-xs text-center tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="•••• •••• ••••"
            />
          </div>

          <button
            type="submit"
            className="bg-black w-fit justify-center items-center text-white border border-dotted border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300 mt-2 flex mx-auto"
          >
            {isUnlocked ? "Un-Lock" : "Locked"} {/* Button label */}
            <div className={`ml-2 transition-all duration-1000 ease-in-out ${isUnlocked ? "text-green-500" : "text-red-500"}`}>
              {isUnlocked ? <CiUnlock size={25} /> : <CiLock size={25} />}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

SecretsModel.propTypes = {
  closeModel: PropTypes.func.isRequired,
  agentClose: PropTypes.func.isRequired,
};

export default SecretsModel;
