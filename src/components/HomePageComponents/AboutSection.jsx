import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
      {/* Left Section: Text Content */}
      <div className="space-y-8 flex-1 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          LET ME{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            INTRODUCE
          </span>{" "}
          MYSELF
        </h2>

        <p className="text-lg md:text-xl">
          Hi, my name is{" "}
          <span className="text-purple-400 font-semibold">Programmer</span> and
          I'm from <span className="text-purple-400 font-semibold">Delhi</span>.
        </p>

        <p className="text-lg md:text-xl">
          Graduate from{" "}
          <span className="text-purple-400 font-semibold">
            Delhi University
          </span>
          , Delhi in 2018.
          <br />
          Postgraduate from{" "}
          <span className="text-purple-400 font-semibold">
            Career Point University
          </span>
          , Kota in 2022.
        </p>

        <p className="text-lg md:text-xl">
          As a{" "}
          <span className="font-bold text-purple-400">
            Frontend Web Developer
          </span>
          , I enjoy tackling new challenges and continuously expanding my
          skillset.
        </p>

        <p className="text-lg md:text-xl">
          Proficient in{" "}
          <span className="text-yellow-400 font-semibold">JavaScript</span>,
          with working knowledge of{" "}
          <span className="text-blue-400 font-semibold">TypeScript (TS)</span>.
        </p>

        <p className="italic text-lg md:text-xl text-purple-300">
          I love working with modern frameworks like{" "}
          <span className="text-cyan-400 font-bold">React.js</span>.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="mt-12 md:mt-0 md:ml-10">
        <img
          src="images/about.png"
          alt="Developer Illustration"
          className="w-[280px] md:w-[350px] h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default AboutSection;
