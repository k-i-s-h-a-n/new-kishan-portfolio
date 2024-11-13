import { useState } from "react";
import { feedbacks1, feedbacks2, feedbacks3 } from "../../../constants";
import TextHoverEffect from "../../ui/text-hover-effect";
import "./FeedbackStyles.css";
import FeedbackForm from "../FeebackForm";
// import FeedbackForm from "../FeedbackForm";

const FeebackInfinteScroller = () => {
  const [feedbackFormOpen, setFeedbackFormOpen] = useState(false);

  const handleFeedbackForm = () => {
    setFeedbackFormOpen(true);
  };

  const closeFeedbackForm = () => {
    setFeedbackFormOpen(false);
  };
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeFeedbackForm();
    }
  };
  return (
    <div className="md:mx-40 relative md:mt-0 mt-5">
      <div
        className="md:h-[16rem] h-[7rem] flex items-center justify-center"
        id="adventure"
      >
        <TextHoverEffect text="Insights" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleFeedbackForm}
          className="w-36 h-10 border-none rounded-lg bg-gradient-to-r from-[#77530a] via-[#ffd277] to-[#77530a] bg-[length:250%] bg-left text-[#ffd277] relative flex items-center justify-center cursor-pointer transition-all duration-1000 overflow-hidden hover:bg-[position:right] active:scale-95"
        >
          <span className="absolute w-[97%] h-[90%] rounded-lg text-[#ffd277] bg-black bg-opacity-80 flex items-center justify-center transition-all duration-1000">
            Share Feedback
          </span>
          <span className="relative">Share Feedback</span>
        </button>
      </div>
      <div className="app md:mt-2 mt-4">
        <div className="tag-list">
          {/* First feedback array */}
          <div
            className="loop-slider"
            style={{ "--duration": "20000ms", "--direction": "normal" }}
          >
            <div className="inner">
              {feedbacks1.map((feedback, index) => (
                <div
                  className="tag whitespace-nowrap overflow-hidden text-ellipsis"
                  key={index}
                >
                  {feedback}
                </div>
              ))}
            </div>
          </div>

          {/* Second feedback array */}
          <div
            className="loop-slider"
            style={{ "--duration": "19860ms", "--direction": "reverse" }}
          >
            <div className="inner">
              {feedbacks2.map((feedback, index) => (
                <div
                  className="tag whitespace-nowrap overflow-hidden text-ellipsis"
                  key={index}
                >
                  {feedback}
                </div>
              ))}
            </div>
          </div>

          {/* Third feedback array */}
          <div
            className="loop-slider"
            style={{ "--duration": "11449ms", "--direction": "normal" }}
          >
            <div className="inner">
              {feedbacks3.map((feedback, index) => (
                <div
                  className="tag whitespace-nowrap overflow-hidden text-ellipsis"
                  key={index}
                >
                  {feedback}
                </div>
              ))}
            </div>
          </div>

          <div className="fade"></div>
        </div>
      </div>
      {/* Modal for Feedback Form */}
      {feedbackFormOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 "
          onClick={handleBackdropClick}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <FeedbackForm closeForm={closeFeedbackForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeebackInfinteScroller;
