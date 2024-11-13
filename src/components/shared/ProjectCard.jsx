import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScannerModel from "./ScannerModel";
import ReactDOM from "react-dom";
import SecretsModel from "./SecretsModel";
import AgentModel from "./AgentModel";

const ProjectCard = (cardData) => {
  const navigate = useNavigate();
  const [qrModelOpen, setQrModelOpen] = useState(false);
  const [secretsModel, setSecretsModel] = useState(false);
  const [agentModel, setAgentModel] = useState(false);

  const handleQrModelClose = () => {
    setQrModelOpen(false);
  };

  const handleSecretsModelClose = () => {
    setSecretsModel(false);
  };

  const handleAgentModelClose = () => {
    setAgentModel(false);
  };

  const handleViewProjects = (link, buttonText) => {
    if (buttonText === "Details") {
      // For internal navigation
      navigate(link);
    } else if (buttonText === "Go Live" && link.startsWith("https")) {
      // For external links, open in new tab
      window.open(link, "_blank");
    } else if (buttonText === "Scan") {
      setQrModelOpen(true);
    } else if (buttonText === "Open") {
      setSecretsModel(true);
      setAgentModel(true);
    }
  };

  return (
    <>
      <div
        className="relative bg-gradient-to-b from-neutral-50 to-neutral-400 text-black p-6 w-56 rounded-xl overflow-hidden h-72 shadow-lg"
        style={{
          clipPath: "polygon(0 0, 38% 0, 42% 5%, 99% 5%, 100% 100%, 0% 100%)",
          borderTopRightRadius: "30px",
          boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1)",
          filter: "brightness(1.2) saturate(1.1)",
        }}
      >
        <div className="text-[40px] font-bold">{cardData.projectName}</div>
        <div className="mt-2 text-sm leading-normal">
          {cardData.description}
        </div>
        <button
          className="mt-6 w-full bg-gray-700 text-white py-2 rounded-full hover:bg-gray-600 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          onClick={() => handleViewProjects(cardData.link, cardData.buttonText)}
        >
          {cardData.buttonText}
          <span className="ml-2 text-lime-300">
            {<cardData.icon size={20} />}
          </span>
        </button>
      </div>

      {qrModelOpen && <ScannerModel closeModel={handleQrModelClose} />}
      {secretsModel && <SecretsModel closeModel={handleSecretsModelClose} agentClose={handleAgentModelClose} /> } 
      {/* Render AgentModel using React Portal */}
      {agentModel &&
        ReactDOM.createPortal(
          <AgentModel closeModel={handleAgentModelClose} />,
          document.getElementById("agent-model-root") // The target div for the portal
        )}
    </>
  );
};

export default ProjectCard;
