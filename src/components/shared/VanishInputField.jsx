import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { placeholders } from "../../constants";

// eslint-disable-next-line react/prop-types
export function PlaceholdersAndVanishInputDemo({ setIsInputVisible }) {
  const [showMessage, setShowMessage] = useState(false); // State to control the display of the message



  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    // Keep the input field for 2 seconds after submission
    setTimeout(() => {
      setShowMessage(true); // Show the message after 2 seconds
      setTimeout(() => {
        setShowMessage(false); // Hide the message after another 2 seconds
        setIsInputVisible(false); // Hide the input field
      }, 2000); // 2000 milliseconds = 2 seconds for the message
    }, 2000); // 2000 milliseconds = 2 seconds for the input field to remain visible
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      {showMessage ? (
        <p className="text-center text-white">
          Thanks For Reaching Me Out.
        </p>
      ) : (
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
