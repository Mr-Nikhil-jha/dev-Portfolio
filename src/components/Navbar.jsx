import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, ListAlt, Description } from "@mui/icons-material";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll to apply glassmorphic effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`p-4 text-white flex justify-center space-x-8 fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-[#0A0E27]/10 backdrop-blur-md shadow-md" : "bg-[#0A0E27]"}`}>
            <NavItem to="/" icon={<Home fontSize="small" />} label="Home" />
            <NavItem to="/skill-set" icon={<Person fontSize="small" />} label="Skill Set" />
            <NavItem to="/project" icon={<ListAlt fontSize="small" />} label="Projects" />
            <NavItem to="/resume" icon={<Description fontSize="small" />} label="Resume" />
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
