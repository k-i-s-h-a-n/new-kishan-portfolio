import { useState } from "react";
import RoundedBorderContainer from "./shared/RoundedBorderContainer";
import SocialMedia from "./shared/SocialMedia";
import TextHoverEffect from "./ui/text-hover-effect";
import aviProfile from "../assets/aviBike.png";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: ""
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_60w9hi2"; 
    const templateID = "template_gdkv6w5"; 
    const userID = "BUgwRrCtSeK2g1XRg"; 
    const templateParams = {
      to_name: "Abhishek Kumar", 
      from_name: `${formData.firstName} ${formData.lastName}`, 
      message: formData.message,
    };
    

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID) 
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset the form after successful submission
        setFormData({ firstName: "", lastName: "", message: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  return (
    <div className="md:mx-40 mt-14 md:mt-11" id="contact!">
      <div className="md:h-[16rem] h-[7rem] flex items-center justify-center" id="adventure">
        <TextHoverEffect text="Connect" />
      </div>
      <div className="bg-transparent w-full max-w-5xl mx-auto rounded-lg shadow-lg flex flex-col lg:flex-row mt-2 border border-gray-700 mb-11 md:max-h-[70vh] max-h-fit">
        <div className="lg:w-2/3 p-6 relative">
          {/* Three Dots (Red, Yellow, Green) */}
          <div className="absolute top-3 left-3 flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Contact Form */}
          <div className="ml-5 md:ml-11">
            <h2 className="text-white text-2xl font-semibold mb-6 mt-11">
              Let&apos;s Connect Over Coffee
            </h2>
            <p className="text-[13px] text-gray-400">
              Got a question or need some help? Drop me a message, and I&apos;ll get back to you within 2 hours. I&apos;m here to ensure you get the support you need!
            </p>
            <div className="relative w-full max-w-2xl py-2 mt-7">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* First Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-400 bg-transparent text-white text-[17px] outline-none pt-4 focus:border-b-3 focus:border-gradient-to-r from-[#ffd277] to-[#38caef] font-normal transition-colors duration-200"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="first-name"
                    className="absolute top-0 left-0 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-[15px] peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-[#38caef] peer-focus:font-bold"
                  >
                    First Name
                  </label>
                </div>

                {/* Last Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-400 bg-transparent text-white text-[17px] outline-none pt-4 focus:border-b-3 focus:border-gradient-to-r from-[#ffd277] to-[#38caef] font-normal transition-colors duration-200"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="last-name"
                    className="absolute top-0 left-0 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-[15px] peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-[#38caef] peer-focus:font-bold"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative w-full mt-6">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-400 bg-transparent text-white text-[17px] outline-none pt-4 focus:border-b-3 focus:border-gradient-to-r from-[#ffd277] to-[#38caef] font-normal transition-colors duration-200"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute top-0 left-0 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-[15px] peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-[#38caef] peer-focus:font-bold"
                >
                  Share Your Thoughts
                </label>
              </div>
            </div>

            <div className="md:mt-11 mt-12 md:ml-2">
              <button
                className="px-11 py-1 bg-white text-black md:w-[85%] w-full rounded-lg"
                onClick={sendEmail} // Call sendEmail here
              >
                Get in touch
              </button>
            </div>

            <div className="mt-7">
              <RoundedBorderContainer />
            </div>

            <div className="md:mt-11 mt-8">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-[80%] p-1 flex items-center justify-center">
          <img
            src={aviProfile}
            alt="Contact Us"
            className="hidden sm:block w-full h-full object-cover rounded-lg filter grayscale"
          />
        </div>
      </div>

      {/* Uncomment Tooltip if needed */}
      {/* <Tooltip /> */}
    </div>
  );
};

export default ContactUs;
