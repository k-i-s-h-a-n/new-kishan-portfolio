import { useState, useEffect } from 'react';

const RoundedBorderContainer = () => {
  const [hovered, setHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Call me to discuss your next project!",
    "Wanna hire me as a developer?",
    "Wanna hire me as a freelancer?",
    "Or just wanna share some idea?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div
      className="md:max-w-[350px] max-w-full h-[70px] border border-gray-50 rounded-2xl flex items-center justify-start backdrop-blur-md transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-[50px] h-[50px] ml-2 rounded-lg">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.0002 4V5C15.0002 6.88562 15.0002 7.82843 15.586 8.41421C16.1718 9 17.1146 9 19.0002 9H20.5002M20.5002 9L18.0002 7M20.5002 9L18.0002 11"
            stroke="#f1f3f8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
            stroke="#f1f3f8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="w-[calc(100%-90px)] ml-2 text-white font-poppins transition-all duration-500">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">Else make a call!</p>
        </div>
     
        {hovered ? (
          <a href="tel:+916204926745" 
   className="text-sm font-light opacity-100 transition-opacity duration-500 text-green-500 hover:text-green-700 animate-pulse">
    +91 6204926745
</a>

        ) : (
          <p className="text-sm font-light opacity-100 transition-opacity duration-500">
            {messages[messageIndex]}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoundedBorderContainer;
