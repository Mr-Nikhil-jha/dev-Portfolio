import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, ListAlt, Description, Menu, Close } from "@mui/icons-material";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detect scroll to apply glassmorphic effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`p-4 text-white fixed w-full top-0 z-10 transition-all duration-300 ${isScrolled ? "bg-[#0A0E27]/10 backdrop-blur-md shadow-md" : "bg-[#0A0E27]"}`}>
            <div className="flex justify-between items-center md:hidden px-4">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
                </button>
            </div>
            <div className={`flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 ${isOpen ? "block" : "hidden"} md:flex`}>
                <NavItem to="/Home" icon={<Home fontSize="small" />} label="Home" />
                <NavItem to="/skill-set" icon={<Person fontSize="small" />} label="Skill Set" />
                <NavItem to="/project" icon={<ListAlt fontSize="small" />} label="Projects" />
                <NavItem to="/resume" icon={<Description fontSize="small" />} label="Resume" />
            </div>
        </nav>
    );
};

const NavItem = ({ to, icon, label }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `flex items-center space-x-2 cursor-pointer ${isActive ? "text-blue-400" : "hover:text-gray-300"}`}>
            {icon}
            <span className="text-lg">{label}</span>
        </NavLink>
    );
};

export default Navbar;
