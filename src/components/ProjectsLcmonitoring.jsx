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
                Lc Monitoring: A webapp for tracking student learning progress.
              </h1>
              <p className="text-gray-400 text-xs mt-2">
                Developed By:
                <span className="text-white"> Kishan Kumar</span>
              </p>
              <p className="text-slate-300 text-base leading-8 my-5">
              LC Monitoring is a web app designed to track student learning progress across district, block, and school levels. It was developed to provide insights into the institutional course packages offered by OKCL. The platform allows users to view details such as which courses have been taught, the total time spent on them, and progress analysis broken down by subject and chapter. This tool is invaluable for monitoring and improving learner outcomes effectively.
              </p>
              <p className="text-gray-500">
                <strong>NOTE : </strong>Due to the sensitive nature of the company's data, I am unable to provide access. However, a detailed guide is attached, offering a comprehensive overview of the platform's features and functionality.
              </p>
              <br />
              <span>
              Website:{" "}
                <button
                  onClick={() => openLink("https://lcm.okcl.co.in/")}
                  className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                >
                  Lc Monitoring (Click Me)
                </button>
              </span>
              <p className="text-xl font-bold">Tools: Python & Django, DRF, HTML, CSS, Javascript, Bootstrap, AWS (EC2, S3), aaPanel, postgresql, git & gitLab,corn jobs</p>
              <h3 className="text-xl font-bold text-white my-5"># Features</h3>
              <p className="text-slate-300 text-base leading-8 my-5">Dashboard</p>
              <p className="text-gray-500">
              A web application designed to monitor and analyze student learning progress effectively.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                {/* <strong>Progress Tracking:</strong> */}
                <p><strong>1 -Progress Tracking:</strong>
                Monitor learning progress across district, block, and school levels.</p>
                <p><strong>2 - Course Insights: </strong>View details of courses taught and total time spent on them.</p>
                <p><strong>3- Subject and Chapter Analysis:</strong>Breakdown of learning time by subject and chapter for detailed analysis.</p>
                <p><strong>4 - User-friendly Dashboard:</strong>Easy-to-navigate interface to visualize learner data at multiple levels.</p>
               
              </blockquote>            

             

              <p className="text-slate-300 text-base leading-8 my-5">
              Automated Data Processing:
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <p> 1- Implemented cron jobs to periodically process and calculate learners' progress. </p>
                <p>
                2 - Ensures the data displayed is accurate and up-to-date.
                </p>
              </blockquote>

             

              <p className="text-slate-300 text-base leading-8 my-5">
                Project Deployment
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
              The project was successfully deployed on an AWS EC2 instance, ensuring high availability and scalability.This setup guarantees seamless access and performance for all users.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrmsDetails;
