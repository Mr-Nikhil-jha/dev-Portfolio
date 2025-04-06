import React from "react";

const AboutSection = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20">
      {/* Left Section: Text Content */}
      <div className="space-y-6 flex-1 max-w-2xl">
        <h2 className="text-5xl ml-15">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </h2>

        <p className="text-lg">
          Hi, my name is{" "}
          <span className="text-purple-500 font-bold">programmer</span> and I'm
          from <span className="text-purple-500 font-bold">Delhi</span>.
        </p>

        <p className="text-lg">
          Graduate From{" "}
          <span className="text-purple-500">Delhi University</span>, Delhi in
          2018.
          <br />
          Post Graduate From{" "}
          <span className="text-purple-500">Career Point University</span>, Kota
          in 2022.
        </p>

        <p className="text-lg">
          As a <span className="font-bold text-purple-500">Frontend - Web</span>{" "}
          developer, I enjoy tackling new challenges and continuously expanding
          my skillset.
        </p>

        <p className="text-lg">
          I am proficient in{" "}
          <span className="text-yellow-500 font-bold">JavaScript</span>, as well
          as have knowledge in programming languages such as{" "}
          <span className="text-blue-500">TypeScript (TS)</span>.
        </p>

        <p className="italic text-lg text-purple-500">
          Modern JavaScript libraries and frameworks like{" "}
          <span className="text-cyan-500 font-bold">React.js</span>.
        </p>
      </div>

      <div className="mt-10 md:mt-0 flex-shrink-0">
        <img
          src="images/about.png"
          alt="Developer Illustration"
          className="w-[300px] max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutSection;
