import React from "react";
import {
  PortfolioHeader,
  AboutSection,
  TechSkill,
  TechUsed,
} from "../components/index";

import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaReact, FaShopify, FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AnimatedOnScroll from "../components/Animation/Animation";
import "swiper/css";
import "swiper/css/pagination";

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
    <div className="MainHomePage">
      <AnimatedOnScroll delay={0.1}>
        <PortfolioHeader />
      </AnimatedOnScroll>

      {/* <AnimatedOnScroll > */}
      <AboutSection />
      {/* </AnimatedOnScroll> */}

      <AnimatedOnScroll delay={0.2}>
        <TechUsed iconDataForTechUsed={iconDataForTechUsed} />
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.3}>
        <TechSkill iconData={iconData} />
      </AnimatedOnScroll>

      <AnimatedOnScroll delay={0.4}>
        {/* Recent Works Section */}
        <div className="bg-gradient-to-b py-16 px-4 from-gray-900 via-black to-gray-900">
          {/* Title */}
          <div className="text-center w-max m-auto group">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white relative">
              <span className="relative z-10">Recent Top</span>
              <span className="ml-2 text-purple-600 z-10">Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="hidden md:flex justify-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>

          {/* Swiper for mobile */}
          <div className="md:hidden pt-10">
            <Swiper
              spaceBetween={20}
              modules={[Pagination]}
              slidesPerView={1}
              className="px-4"
            >
              {[1, 2, 3].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full max-w-sm mx-auto">
                    <ProjectCard />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
}

export default HomePage;
