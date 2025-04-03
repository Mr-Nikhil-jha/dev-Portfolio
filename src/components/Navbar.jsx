import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Person, ListAlt, Description } from "@mui/icons-material";

const Navbar = () => {
    return (
        <nav className="bg-[#0A0E27] p-4 text-white flex justify-center space-x-8 fixed w-full z-10">
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
