import PropTypes from "prop-types";
import iosScanner from "../../../src/assets/iosGuriAppScanner.png"; 
import androidScanner from "../../../src/assets/androidGuriAppScanner.png";
import "./sharedCss.css";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const ScannerModel = ({ closeModel }) => {
  // State to track if the user has selected iOS or Android
  const [isIosSelected, setIsIosSelected] = useState(false);
  const [isAndroidSelected, setIsAndroidSelected] = useState(false);

  const handleIosScanner = () => {
    setIsIosSelected(true);
    setIsAndroidSelected(false);
  };

  const handleAndroidScanner = () => {
    setIsIosSelected(false);
    setIsAndroidSelected(true);
  };

//   const resetScanner = () => {
//     setIsIosSelected(false);
//     setIsAndroidSelected(false);
//   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="form-container md:w-[400px] w-[350px]">
       
        <button
          onClick={() => {
            closeModel();
            // resetScanner(); 
          }}
          className="text-gray-500 hover:text-gray-700 transition-all duration-300 flex justify-end"
          aria-label="Close"
        >
          <RiCloseFill size={24} />
        </button>

        {/* Conditional Rendering */}
        {isIosSelected || isAndroidSelected ? (
        
          <div className="scanner-content flex justify-center flex-col">
            <img
              src={isIosSelected ? `${iosScanner}` : `${androidScanner}`}
              alt="iOS Scanner"
              className="w-40 h-[186px] rounded-md border border-white ml-6 border-dashed"
            />
          </div>
        ) : (
          <form className="form">
          <div className="form-group text-center mb-6">
            <h2 className="mb-2 text-xl">Choose Your Device Please!</h2>
          </div>
          <div className="flex flex-row gap-x-11">
            <button
              className="bg-black text-white border border-dotted border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
              onClick={handleAndroidScanner}
            >
              Android
            </button>
            <button
              className="bg-black text-white border border-dotted border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
              onClick={handleIosScanner}
            >
              iOS
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

ScannerModel.propTypes = {
  closeModel: PropTypes.func.isRequired,
};

export default ScannerModel;
