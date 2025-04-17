import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import Loader from "./Loader";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showLoader, setShowLoader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setShowLoader(true);
    setMenuOpen(false); // close mobile menu on link click
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Loader isActive={showLoader} onComplete={handleLoaderComplete} />

      <nav
        className={`p-4 md:p-6 text-white  w-full z-20 transition-all duration-300 ${
          isScrolled ? "bg-[#0A0E27]/10 backdrop-blur-md shadow-md" : "bg-[#0A0E27]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Nav Links (Centered) */}
          {!isMobile && (
            <div className="flex justify-center w-full space-x-10">
              <NavItem to="/" label="Home" onClick={handleClick} />
              <NavItem to="/skill-set" label="Skill Set" onClick={handleClick} />
              <NavItem to="/Projects" label="Projects" onClick={handleClick} />
              <NavItem to="/resume" label="Resume" onClick={handleClick} />
            </div>
          )}

          {/* Mobile Menu Button (Right Side) */}
          {isMobile && (
            <button onClick={toggleMenu} className="text-white ml-auto">
              {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
            </button>
          )}
        </div>

        {/* Mobile Nav Links */}
        {isMobile && menuOpen && (
          <div className="flex flex-col items-start px-6 py-4 space-y-4 bg-[#0A0E27]">
            <NavItem to="/" label="Home" onClick={handleClick} />
            <NavItem to="/skill-set" label="Skill Set" onClick={handleClick} />
            <NavItem to="/Projects" label="Projects" onClick={handleClick} />
            <NavItem to="/resume" label="Resume" onClick={handleClick} />
          </div>
        )}
      </nav>
    </>
  );
};

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `text-lg font-medium transition-colors duration-200 navButton ${
        isActive ? "text-blue-400" : "hover:text-blue-300"
      }`
    }
  >
    {label}
  </NavLink>
);

export default Navbar;
