import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";

function TechSkill() {
    const iconData = [
        { icon: IoLogoHtml5, name: "HTML5" },
        { icon: FaCss3, name: "CSS3" },
        { icon: IoLogoJavascript, name: "JavaScript" },
        { icon: FaReact, name: "React" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiJquery, name: "jQuery" },
        { icon: RiTailwindCssFill, name: "Tailwind CSS" },
        { icon: FaShopify, name: "Shopify" },
    ];
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="p-6 bg-transparent mt-5">
                <div className="text-center py-3 group w-max m-auto">
                    <span className="text-white font-bold text-3xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
                        Professional
                    </span>
                    <span className="ml-2 text-purple-700 text-4xl font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
                        SkillSet
                    </span>
                </div>
                <ul className="grid md:grid-cols-4 grid-cols-3 gap-10 mt-5">
                    {iconData.map(({ icon: Icon, name }, index) => (
                        <li key={index} className="group relative md:p-10 p-8 rounded-xl cursor-pointer border border-purple-500 bg-transparent shadow-lg hover:shadow-purple-500/50 transition duration-300">
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-max">{name}</span>
                            <Icon className="md:text-7xl text-3xl text-white group-hover:text-purple-400 transition duration-300" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TechSkill;
