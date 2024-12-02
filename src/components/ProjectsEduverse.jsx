import React, { useState } from "react";
import kishan from "../assets/projectImages/visits.png";
import visitsPdf from "../assets/projectPdfs/visits.pdf";

const CrmsDetails = () => {
  const [showPdf, setShowPdf] = useState(false);

  const openPdfModal = () => {
    setShowPdf(true); // Show the PDF modal when the image is clicked
  };

  const closePdfModal = () => {
    setShowPdf(false); // Close the PDF modal
  };

  const handleClickOutside = (e) => {
    // Close modal if the user clicks outside the modal content
    if (e.target.classList.contains("pdf-modal-overlay")) {
      setShowPdf(false);
    }
  };

  
    const openLink = (url) => {
      window.open(url, "_blank");
    };
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        {/* Image with tooltip and hover effect */}
        <div
          className="bg-cover bg-center text-center overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer relative"
          style={{
            minHeight: 500,
            backgroundImage: `url(${kishan})`,
          }}
          title="Click to View PDF"
          onClick={openPdfModal} // Click on the image to open the PDF
        >
          {/* Hover Text - This will appear when the user hovers over the image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-xl font-bold">
            Click to View PDF
          </div>
        </div>

        {/* PDF Modal */}
        {showPdf && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center pdf-modal-overlay"
            onClick={handleClickOutside} // Close modal if clicked outside
          >
            <div className="bg-white p-5 w-3/4 h-3/4 overflow-auto relative">
              <button
                onClick={closePdfModal}
                className="absolute top-2 right-2 text-white font-bold"
              >
                Close
              </button>
              <iframe
                src={visitsPdf}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Visits PDF"
              ></iframe>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-black text-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-white font-bold text-3xl mb-2">
                EduVerse: An eBook Reader Platform for School Students
              </h1>
              <p className="text-gray-400 text-xs mt-2">
                Developed By:
                <span className="text-white"> Kishan Kumar</span>
              </p>
              <p className="text-slate-300 text-base leading-8 my-5">
              EduVerse is an innovative eBook reader designed to cater to the educational needs of schools and institutions. Developed to complement our e-content offerings, it combines advanced technology with user-centric features. Key functionalities include text-to-speech, AI-powered translation, detailed word analysis (meanings, synonyms, antonyms, pronunciation, usage examples), a search function, and page tracking to monitor reading progress and time spent.

              </p>
              <p className="text-gray-500">
                <strong>NOTE : </strong>Due to the sensitive nature of the company's data, I am unable to provide admin access. However, you can explore the learner's website dashboard to gain insights. Additionally, a detailed guide is attached, offering a comprehensive overview of the platform's features and functionality.
              </p>
              <br />
              <span>
              Website:{" "}
                <button
                  onClick={() => openLink("https://ebook.okcl.co.in/")}
                  className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                >
                  EduVerse (Click Me)
                </button>
              </span>
              <p className="text-xl font-bold">Tools: Python & Django, DRF, HTML, CSS, Javascript, Bootstrap, AWS (EC2, S3), aaPanel, postgresql, git & gitLab</p>
              <h3 className="text-xl font-bold text-white my-5"># Features</h3>
              <p className="text-slate-300 text-base leading-8 my-5">Learner's Dashboard</p>
              <p className="text-gray-500">
              EduVerse is a smart eBook reader designed to enhance the learning experience for students. It offers cutting-edge features such as Text-to-Speech, AI-Powered Translation, and detailed word analysis, making learning interactive and accessible. These functionalities are seamlessly integrated into the learner's login dashboard for a personalized experience.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Text-to-Speech:</strong>
                <p><strong>1 - Read Selected Text:</strong>
                Users can draw a rectangular area on the PDF page to select specific text. Clicking the "Read" button will prompt the system to read aloud only the selected content.</p>
                <p><strong>2 - Read Entire Page: </strong>Alternatively, users can opt to read the entire content of the current page in one go.</p>
                <p><strong>3- Play/Pause Functionality: </strong>Users can start or pause the speech at any point for convenience.</p>
                <p><strong>4 - Speed Control:</strong>The feature allows users to adjust the reading speed according to their preference, ensuring a comfortable and personalized experience.</p>
              </blockquote>


              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>AI-Powered Translation:</strong> EduVerse leverages the power of Python and its robust libraries to provide accurate translations, currently supporting English to Odia. With an accuracy rate of 85–90%, this feature ensures effective communication and understanding for Odia-speaking learners.
              </blockquote>


              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Automatic Word Selection:</strong> EduVerse automatically detects important words in the content, providing students with detailed information such as meanings, synonyms, antonyms, pronunciation, and usage examples. This feature helps students easily learn and understand key terms, enhancing their vocabulary and comprehension.
              </blockquote>

              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Search Word Functionality:</strong>Allows users to quickly find specific words or phrases within the content, saving time and improving navigation.
              </blockquote>

              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Page Tracking and Progress Monitoring:</strong> EduVerse tracks time spent on each page, daily learning progress, and words searched, helping students monitor their own progress and enabling educators to assess performance.
              </blockquote>


              <p className="text-slate-300 text-base leading-8 my-5">
                Admin Dashboard
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <p> 1- The Admin Dashboard allows teachers to efficiently manage eBook content by adding, editing, or deleting eBooks according to predefined categories and subcategories. </p>
                <p>
                2 - Teachers can also manage school details and track individual student learning progress, monitoring their engagement and performance to ensure effective learning outcomes.
                </p>
              </blockquote>

              <p className="text-slate-300 text-base leading-8 my-5">
                AWS S3 Integration for Media Storage
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                To manage and securely store all media and static files, I integrated AWS S3 into the system.
              </blockquote>


              <p className="text-slate-300 text-base leading-8 my-5">
                Project Deployment
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
              The project was successfully deployed on an AWS EC2 instance, ensuring high availability and scalability. Media files are securely stored using AWS S3, and aaPanel was utilized for efficient server management. This setup guarantees seamless access and performance for all users.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrmsDetails;
