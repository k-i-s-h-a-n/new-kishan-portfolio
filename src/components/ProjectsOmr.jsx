import React, { useState } from "react";
import omr from "../assets/projectImages/omr.png";
import omrPdf from "../assets/projectPdfs/omrProject.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

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
            backgroundImage: `url(${omr})`,
          }}
          title="Click to View PDF"
          onClick={openPdfModal} // Click on the image to open the PDF
        >
          {/* Hover Text */}
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
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={omrPdf} />
              </Worker>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-black text-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-white font-bold text-3xl mb-2">
                PROJECT : OMR EXAMINATION SYSTEM
              </h1>
              <p className="text-gray-400 text-xs mt-2">
                Developed By:
                <span className="text-white"> Kishan Kumar</span>
              </p>
              <p className="text-slate-300 text-base leading-8 my-5">
              I developed a comprehensive OMR Examination System to streamline exam management for offline learning centers. The system enables teachers to generate question papers and OMR sheets, scan and evaluate completed sheets, and calculate student scores automatically. It provides a user-friendly platform for managing exams efficiently, with detailed result analysis for performance insights.
              </p>
              <p className="text-gray-500">
                <strong>NOTE : </strong> Due to company guidelines and the sensitive
                nature of the data, the website is accessible only with proper
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

              <p className="text-xl font-bold">Tools: Python & Django, DRF, HTML, CSS, Javascript, Bootstrap, AWS (EC2, S3), aaPanel, postgresql, git & gitLab</p>
              <h3 className="text-xl font-bold text-white my-5"># Webapp Features</h3>
              <p className="text-slate-300 text-base leading-8 my-5">Question Paper Generation / Download</p>
              <p className="text-gray-500">
              This module allows teachers to create question papers in two flexible ways:
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Custom Question Paper Generation:</strong> Teachers can create their own question papers by uploading Excel or ZIP files. These files can include their personalized questions, ensuring alignment with the syllabus and specific exam requirements.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Database-Driven Question Paper Creation:</strong> Teachers can also select questions from a centralized database. This database contains a collection of subject-specific questions contributed by other teachers, enabling quick and standardized paper generation.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Unique Exam ID:</strong> Once a question paper is created, a unique exam ID is automatically generated for easy tracking and identification.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                <strong>Download Options:</strong> Teachers can download the generated question paper immediately or at a later time as needed. This ensures convenience and flexibility for exam preparation.
              </blockquote>



              <p className="text-slate-300 text-base leading-8 my-5">
              OMR Sheet Generation
              </p>
              <p className="text-gray-500">
              This module enables teachers to generate OMR sheets seamlessly for corresponding Exam IDs created earlier.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>For New Students : </strong> 
                <p>1 - Teachers upload an Excel list containing the details of new students.</p>
                <p>2 - The system extracts and displays the uploaded data.</p>
                <p>3 - Once finalized, OMR sheets for each student are generated in PDF format, ready for download.</p>
              </blockquote>
              
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>For Existing Students : </strong> 
                <p>1 - Teachers don’t need to re-upload the Excel list.</p>
                <p>2 - They can fetch student details from the system and generate OMR sheets directly, simplifying the process.</p>               
              </blockquote>


              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>QR Code Integration : </strong>
                 Each OMR sheet includes a unique QR code that encodes all necessary details (e.g., student information, exam ID). 
                <p>1 - This ensures accurate scanning and tracking.</p>
                <p>2 - The QR code is concealed from students to maintain confidentiality and prevent tampering.</p>               
              </blockquote>



              <p className="text-slate-300 text-base leading-8 my-5">
              OMR Scanning Module
              </p>
              <p className="text-gray-500">
              After the exams are successfully conducted, teachers capture images of the completed OMR sheets using their phones.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>Image Upload : </strong> 
                 Teachers upload the OMR sheet images to the system, associating them with the corresponding Exam ID.
              </blockquote>
              
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>Scanning and Evaluation : </strong> 
                <p>1 - The system uses an advanced algorithm, powered by Python libraries such as OpenCV, to scan the uploaded OMR sheet images.</p>
                <p>2 - It detects the marked answers, compares them with the correct ones, and automatically calculates the student's score.</p>               
              </blockquote>


              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>Score Calculation and Storage : </strong>
                 The calculated score for each student is stored in the database, ensuring accurate and quick access to results.
              </blockquote>


              <p className="text-slate-300 text-base leading-8 my-5">
              Result Dashboard
              </p>
              <p className="text-gray-500">
              The Result Dashboard provides teachers with a comprehensive overview of all exams they have conducted.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>Exam Overview: </strong> 
                 <p>1- Teachers can view all exams conducted, filtered by date range.</p>
                 <p>2 - A summary of each exam’s performance is displayed, including the total number of students who appeared, passed, and failed.</p>
              </blockquote>
              
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>In-Depth Insights: </strong> The dashboard provides detailed insights for each exam, such as:
                <p>1 - Number of students who passed or failed.</p>
                <p>2 - Various performance charts (e.g., pass/fail rate, overall scores, etc.) for a clearer understanding of exam outcomes.</p>               
              </blockquote>


              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                 <strong>Individual Student Responses : </strong>
                 <p>1- Teachers can view detailed responses for each student</p>
                 <p>2- This feature enables teachers to analyze individual student performance, identify areas of improvement, and provide targeted feedback.</p>
              </blockquote>




              <p className="text-slate-300 text-base leading-8 my-5">
                AWS S3 Integration for Media Storage
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                To manage and securely store all media files and static files, I integrated AWS S3 into the system.
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
