import React from "react";
// import ProjectCard from "../components/index";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Projects() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">
      {/* Header (optional) */}
      <header className="p-4">
        <h1 className="text-2xl font-bold text-center text-White">My Projects</h1>
      </header>

      {/* Main Content (flex-grow to push footer down) */}
      <main className="flex-grow flex items-center justify-center">
        <div className="flex overflow-x-auto gap-4 px-4 py-2 md:flex-wrap scrollbar-hide">
          <ProjectCard className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%]" />
          <ProjectCard className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%]" />
          <ProjectCard className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%]" />
          <ProjectCard className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%]" />
          <ProjectCard className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%]" />
        </div>
      </main>
=======
    <div className="project_Card">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
>>>>>>> 9e07b93e323738270d116c204a59977050eaf990
    </div>
  );
}

export default Projects;
