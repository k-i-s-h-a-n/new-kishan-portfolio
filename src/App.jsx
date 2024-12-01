import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FeedbackInfiniteScroller from "./components/shared/Feebacks/Feedbacks";
import VideoContainer from "./components/shared/VideoContainer";
import Blog from "./components/Blog";
import SecretsOfMe from "./components/shared/secretsOfMe/Secrets";
import WelcomeModal from "./components/StartingModel";
import CrmsDetails from "./components/CrmsDetails";
import ProjectVisits from "./components/ProjectVisits";
import ProjectsOmr from "./components/ProjectsOmr";
import ProjectsEduverse from "./components/ProjectsEduverse";
import ProjectsLcmonitoring from "./components/ProjectsLcmonitoring";
import ProjectsTezkarya from "./components/ProjectsTezkarya";
import ProjectsCredit from "./components/ProjectsCredit";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Default to false

  const closeModal = () => {
    setIsModalOpen(false);
    // Set the localStorage flag when the modal is closed
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");
    if (!hasSeenModal) {
      // Show the modal only if the user hasn't seen it
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Projects />
              <About />
              <VideoContainer />
              <FeedbackInfiniteScroller />
              <ContactUs />
            </main>
          }
        />
        <Route path="/avi-blog" element={<Blog />} />
        <Route path="/secrets-details" element={<SecretsOfMe />} />
        <Route path="/crms-details" element={<CrmsDetails />} />
        <Route path="/project-vists" element={<ProjectVisits />} />
        <Route path="/project-OMR" element={<ProjectsOmr />} />
        <Route path="/project-eduverse" element={<ProjectsEduverse/>} />
        <Route path="/project-lcMonitoring" element={<ProjectsLcmonitoring />} />
        <Route path="/project-tezKarya" element={<ProjectsTezkarya />} />
        <Route path="/project-credit" element={<ProjectsCredit />} />
      </Routes>

      {/* Show the welcome modal if isModalOpen is true */}
      {isModalOpen && <WelcomeModal closeModal={closeModal} />}
    </>
  );
}
