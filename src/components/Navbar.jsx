import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Person,
  ListAlt,
  Description,
  Menu,
  Close,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "../assets/logo.gif"; // Adjust the path to your logo

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768); // Open by default on desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect scroll to apply glassmorphic effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setIsOpen(!mobileView); // Auto-show menu on desktop
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`p-4 text-white fixed w-full md:top-0 md:bottom-auto z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0E27]/10 backdrop-blur-md shadow-md"
          : "bg-[#0A0E27]"
<<<<<<< HEAD
      } ${isMobile ? "rounded-4xl" : ""}`}
=======
      }`}
>>>>>>> 9e07b93e323738270d116c204a59977050eaf990
    >
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <div className="flex justify-end items-center md:hidden px-4">
<<<<<<< HEAD
          <div className="left-0 fixed flex items-center justify-center w-16 h-16  rounded-full shadow-lg bg-transparent">
            <img src={logo} className="w-20 h-15" />
          </div>
=======
>>>>>>> 9e07b93e323738270d116c204a59977050eaf990
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
            </motion.div>
          </button>
        </div>
      )}

      {/* Navigation Items */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 overflow-hidden md:overflow-visible ${
<<<<<<< HEAD
          isMobile ? " " : "opacity-100 !h-auto"
=======
          isMobile ? "" : "opacity-100 !h-auto"
>>>>>>> 9e07b93e323738270d116c204a59977050eaf990
        }`}
      >
        <NavItem to="/" icon={<Home fontSize="small" />} label="Home" />
        <NavItem
          to="/skill-set"
          icon={<Person fontSize="small" />}
          label="Skill Set"
        />
        <NavItem
          to="/project"
          icon={<ListAlt fontSize="small" />}
          label="Projects"
        />
        <NavItem
          to="/resume"
          icon={<Description fontSize="small" />}
          label="Resume"
        />
      </motion.div>
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-2 cursor-pointer ${
          isActive ? "text-blue-400" : "hover:text-gray-300"
        }`
      }
    >
      {icon}
      <span className="text-lg">{label}</span>
    </NavLink>
  );
};

export default Navbar;
