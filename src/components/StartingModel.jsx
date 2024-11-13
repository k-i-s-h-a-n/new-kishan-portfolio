import PropTypes from "prop-types";

const WelcomeModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-500 ease-in-out">
      <div className="bg-gradient-to-r from-gray-800 bottom-12 via-black to-gray-900 w-full max-w-md rounded-lg shadow-2xl p-6 relative border border-slate-500 border-dashed animate-fade-in-down">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
        >
          <span className="text-2xl">&times;</span>
        </button>

        {/* Welcome content */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Welcome to My Portfolio!
          </h2>
          <p className="text-lg text-slate-500 mb-4">
            Hi, I&apos;m <span className="text-yellow-400">Kishan</span>! I hope you&apos;re doing well.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6">
          <button
            onClick={closeModal}
            className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
WelcomeModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default WelcomeModal;
