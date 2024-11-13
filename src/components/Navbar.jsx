import { useState, useRef, useEffect } from "react";
import { navLists } from "../constants";
import { PlaceholdersAndVanishInputDemo } from "./shared/VanishInputField";
import animateEmail from "../assets/emailhi.gif";
import Cv from "../../src/assets/overleafresume.pdf";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleIconClick = () => {
        setIsInputVisible(!isInputVisible);
    };

    const handleClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setIsInputVisible(false);
            setIsMobileMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleHome = () => {
        navigate("/");
    };

    const handleNavClick = (nav) => {
        console.log(nav);
        if (nav === "Download CV") {
            const link = document.createElement("a");
            link.href = Cv; 
            link.download = "Abhishek_CV.pdf"; 
            link.click();
            return;
        } 

        if(nav === "Blog"){
            navigate("/avi-blog")
        }

        if(nav === "About" || nav === "Contact!" || nav === "Why Me?"){
            navigate("/")
        }
        const section = document.getElementById(nav.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(prev => !prev);
    };

    return (
        <>
            <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
                <nav className="flex w-full screen-max-width relative">
                    <button className="text-lg font-normal" onClick={handleHome}>
                        <span className="text-sm">AVI</span>
                        <span className="font-bold mx-1">|</span>
                        <span className="text-sm">DEV</span>
                    </button>

                    {/* Nav Items for Medium and Large Screens */}
                    <div className="flex flex-1 justify-center max-sm:hidden">
                        {navLists.map((nav) => (
                            <div
                                key={nav}
                                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                            >
                                <button onClick={() => handleNavClick(nav)}>
                                    {nav}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 max-sm:justify-end max-sm:flex-1 relative">
                        <h1 className="text-gray flex items-center justify-center flex-1 max-sm:justify-center">
                            Say hi ~
                            <span
                                className="text-white ml-2 cursor-pointer"
                                onClick={handleIconClick}
                            >
                                <img
                                    src={animateEmail}
                                    alt="say hi"
                                    height={30}
                                    width={30}
                                    className="relative -top-2"
                                />
                            </span>
                        </h1>

                        {/* Hamburger Icon (Visible on Small Screens Only) */}
                        <div className="sm:hidden">
                            <FaBars onClick={toggleMobileMenu} className="cursor-pointer text-gray hover:text-white" />
                        </div>

                        {isInputVisible && (
                            <div
                                ref={inputRef}
                                className="absolute top-full -left-10 md:-left-28 mt-2 z-50 md:w-[420px] p-4 shadow-lg rounded"
                            >
                                <PlaceholdersAndVanishInputDemo
                                    setIsInputVisible={setIsInputVisible}
                                />
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu (Opening from Right Side) */}
                {isMobileMenuVisible && (
                    <div className="fixed top-3 right-0 w-[40%] md:w-1/2 rounded-sm bg-black border border-slate-400 text-white z-50 flex flex-col items-center py-3 transition-transform transform translate-x-0">
                        {navLists.map((nav) => (
                            <div
                                key={nav}
                                className="py-2 text-sm cursor-pointer hover:bg-gray-900 transition-all w-[60] text-center"
                                onClick={() => {
                                    handleNavClick(nav);
                                    setIsMobileMenuVisible(false); // Close the menu after clicking
                                }}
                            >
                                {nav}
                            </div>
                        ))}
                        <button onClick={() => setIsMobileMenuVisible(false)} className="absolute top-2 right-2 text-gray hover:text-white">
                            &times; {/* Close Button */}
                        </button>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
