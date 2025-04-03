import React from "react";

import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

function TechUsed() {
  const iconData = [
    { icon: VscVscode, name: "Vscode" },
    { icon: FaGitAlt, name: "Git" },
    { icon: IoLogoVercel, name: "Vercel" },
  ];
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="p-6 bg-transparent mt-2">
      <div className="text-center py-3 group w-max m-auto">
          <span className="text-white font-bold text-3xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
            Tools I
          </span>
          <span className="ml-2 text-purple-700 text-4xl font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
            Use
          </span>
        </div>
        <ul className="grid grid-cols-3 gap-10 mt-5 mb-2">
          {iconData.map(({ icon: Icon, name }, index) => (
            <li
              key={index}
              className="group relative p-10 rounded-xl cursor-pointer border border-purple-500 bg-transparent shadow-lg hover:shadow-purple-500/50 transition duration-300"
            >
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-max">
                {name}
              </span>
              <Icon className="text-7xl text-white group-hover:text-purple-400 transition duration-300" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechUsed;
