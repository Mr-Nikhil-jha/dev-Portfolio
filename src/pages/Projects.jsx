import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import ProjectCard from "../components/ProjectCard/ProjectCard";

function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Header */}
      <header className="mt-16 text-center z-10 relative py-6">
        <h1 className="text-3xl font-bold text-white">
          Recent Top
          <strong className="text-purple-700"> Works</strong>
        </h1>
        <br />
        <span className="font-mono">
          Here are a few projects I've worked on recently.
        </span>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-2 ">
        {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            grabCursor={true}
            className="w-full max-w-6xl"
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <ProjectCard className="h-[310px] sm:h-[350px] md:h-[450px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full py-6">
            <div className="flex gap-4 overflow-x-auto md:flex-wrap md:justify-center scroll-smooth snap-x snap-mandatory scrollbar-hide">
              {[...Array(6)].map((_, i) => (
                <ProjectCard
                  key={i}
                  className="snap-start flex-shrink-0 w-[85%] sm:w-[60%] md:w-[30%] h-[400px]"
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Projects;
