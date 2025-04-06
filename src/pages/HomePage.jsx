import React from "react";
import {
  PortfolioHeader,
  AboutSection,
  TechSkill,
  TechUsed,
} from "../components/index";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
  const iconData = [
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: FaShopify, name: "Shopify" },
  ];
  const iconDataForTechUsed = [
    { icon: VscVscode, name: "Vscode" },
    { icon: FaGitAlt, name: "Git" },
    { icon: IoLogoVercel, name: "Vercel" },
  ];
  return (
    <>
      <PortfolioHeader />
      <AboutSection />
      <TechUsed iconDataForTechUsed={iconDataForTechUsed} />
      <TechSkill iconData={iconData} />
      <div className="mb-10">
        <div className="text-center py-3 group w-max m-auto">
          <span className="text-white font-bold text-3xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
            Recent Top
          </span>
          <span className="ml-2 text-purple-700 text-4xl font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 group-hover:after:w-full after:transition-all after:duration-300">
            Works
          </span>
        </div>
        <div className="flex justify-center  py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
