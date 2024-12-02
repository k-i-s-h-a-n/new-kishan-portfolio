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
                Visits: The OKCL Center Visits Application (Dashboards & API)
              </h1>
              <p className="text-gray-400 text-xs mt-2">
                Developed By:
                <span className="text-white"> Kishan Kumar</span>
              </p>
              <p className="text-slate-300 text-base leading-8 my-5">
                In our company, there are numerous visits happening across 30
                districts, managed by 30 District Learning Coordinators (DLCs).
                Each district has over 650 Authorized Learning Centers (ALCs).
                Managing these visits manually was a challenging and time-consuming
                task. To address this, I was assigned this project and provided
                with requirements to automate the entire process, ensuring streamlined
                operations and efficient management.
              </p>
              <p className="text-gray-500">
                <strong>NOTE : </strong> Due to company guidelines and the sensitive
                nature of the data, the dashboard is accessible only with proper
                authorization. However, a detailed guide is attached to provide an
                overview of its features and functionality.
              </p>
              <br />
              <span>
                Website:{" "}
                <button
                  onClick={() => openLink("https://visits.okcl.co.in/")}
                  className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                >
                  OKCL Visits
                </button>
              </span>

              <p className="text-xl font-bold">Tools: Python & Django, DRF, HTML, CSS, Bootstrap, AWS (EC2, S3), aaPanel, postgresql, git & gitLab</p>
              <h3 className="text-xl font-bold text-white my-5"># My Role</h3>
              <p className="text-slate-300 text-base leading-8 my-5">Admin Panel Website</p>
              <p className="text-gray-500">
                The admin panel serves as a comprehensive backend system enabling
                seamless management and control of the Visits Android app. It is
                designed to streamline processes across various roles while ensuring
                efficiency and user-friendliness.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>User Management:</strong> From the RM login, admins can
                create and manage users such as ALC, DLC, and other RMs either
                individually or in bulk using Excel. Admins can also edit or
                delete user accounts.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Report Management:</strong> The admin panel allows RMs
                to view reports submitted through the Visits Android app, apply
                filters, export data to Excel, and approve or reject reports
                submitted by users.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Event Management:</strong> Admins can create custom
                events, control their visibility in the app, and allocate or
                deallocate events to specific users, providing full control over
                event operations.
              </blockquote>

              <p className="text-slate-300 text-base leading-8 my-5">
                API Development for the Visits Android App
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                For <strong>ALC, DLC, and RM</strong> users, I developed all the
                APIs required to facilitate the submission of allocated events
                directly through their mobile devices. These APIs ensure seamless
                communication between the app and the backend, enabling efficient
                event management and data synchronization.
              </blockquote>

              <p className="text-slate-300 text-base leading-8 my-5">
                AWS S3 Integration for Media Storage
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                To manage and securely store all media files submitted through the
                Visits Android app, I integrated AWS S3 into the system.
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
