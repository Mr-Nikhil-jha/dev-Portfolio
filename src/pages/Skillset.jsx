import React from "react";
import { TechSkill, TechUsed } from "../components/index";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

function Skillset() {
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
  const iconDataForTechUsed = [
    { icon: VscVscode, name: "Vscode" },
    { icon: FaGitAlt, name: "Git" },
    { icon: IoLogoVercel, name: "Vercel" },
  ];
  return (
    <div>
      <TechSkill iconData={iconData} />
      <TechUsed iconDataForTechUsed={iconDataForTechUsed} />
    </div>
  );
}

export default Skillset;
