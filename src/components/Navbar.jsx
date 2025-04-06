import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, ListAlt, Description } from "@mui/icons-material";
import logo from "../assets/logo.gif";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  return (
    <nav
      className={`p-3 text-white fixed w-full md:top-0 md:bottom-auto z-20 transition-all duration-300 ${
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
          <NavItem to="/" icon={<Home fontSize="small" />} label="Home" />
          <NavItem
            to="/skill-set"
            icon={<Person fontSize="small" />}
            label="Skill Set"
          />
          <NavItem
            to="/Projects"
            icon={<ListAlt fontSize="small" />}
            label="Projects"
          />
          <NavItem
            to="/resume"
            icon={<Description fontSize="small" />}
            label="Resume"
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
        isActive ? "text-blue-400" : "hover:text-gray-300"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Navbar;
