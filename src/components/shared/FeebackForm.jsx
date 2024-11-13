/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import "./sharedCss.css";
import { useState } from 'react';

const FeedbackForm = ({ closeForm }) => {
  const [formSubmit , setFormSubmit] = useState(false)


  const handleFormSubmit = () => {
    setFormSubmit(true)
    closeForm()
  }
  const handleCloseForm = () => {
    closeForm(); 
  };

  return (
    <div className="form-container md:w-[400px] w-[350px]">
      <form className="form">
        <div className="form-group">
         
          <h2 className="mb-2">Your opinion matters - leave a review!</h2>
          <input type="text" id="text" name="text" required />
        </div>
        <div className="flex flex-row gap-x-4">
  <button
  onClick={handleFormSubmit}
    className="bg-black text-white border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
    type="submit"
  >
    Submit
  </button>
  <button
    onClick={handleCloseForm}
    className="bg-black text-white border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
  >
    Close
  </button>
</div>

      </form>
    </div>
  );
};

FeedbackForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
};

export default FeedbackForm;
