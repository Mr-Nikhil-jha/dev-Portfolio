import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, ListAlt, Description } from "@mui/icons-material";
import logo from "../assets/logo.gif";
import Loader from "./Loader";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    console.log("Navbar clicked");
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {/* <Loadr isActive={showLoader} onComplete={handleLoaderComplete} /> */}
      <Loader isActive={showLoader} onComplete={handleLoaderComplete} />
      <nav
        className={`p-6 text-white fixed w-full md:top-0 md:bottom-auto z-20 transition-all duration-300  ${
          isScrolled
            ? "bg-[#0A0E27]/10 backdrop-blur-md shadow-md"
            : "bg-[#0A0E27]"
        } ${isMobile ? "rounded-2xl py-2" : ""}`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center ${
            isMobile ? "justify-between" : "justify-center"
          }`}
        >
          {/* Logo (Only show in mobile) */}
          {isMobile && (
            <img
              src={logo}
              className="w-14 -ml-2 h-12 object-contain"
              alt="Logo"
            />
          )}

          {/* Navigation Links */}
          <div
            className={`flex flex-row gap-3 items-center ${
              isMobile ? "ml-2" : "space-x-8"
            }`}
          >
            <NavItem
              to="/"
              icon={<Home fontSize="medium" />}
              label="Home"
              onClick={handleClick}
            />
            <NavItem
              to="/skill-set"
              icon={<Person fontSize="medium" />}
              label="Skill Set"
              onClick={handleClick}
            />
            <NavItem
              to="/Projects"
              icon={<ListAlt fontSize="medium" />}
              label="Projects"
              onClick={handleClick}
            />
            <NavItem
              to="/resume"
              icon={<Description fontSize="medium" />}
              label="Resume"
              onClick={handleClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ to, icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick} 
    className={({ isActive }) =>
      `flex items-center space-x-1 text-xl font-medium transition-colors duration-200 whitespace-nowrap navButton ${
        isActive ? "text-blue-400" : "hover:text-blue-300"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Navbar;
