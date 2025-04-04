import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      style={{ display: "inline-block", transformOrigin: "bottom center" }}
      animate={{ rotate: [0, 20, -10, 20, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.3 }}
    >
      👋
    </motion.span>
  );
};

const PortfolioHeader = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20">
      <div className="space-y-5 flex-1 min-w-[300px]">
        {" "}
        <h2 className="text-4xl font-bold flex items-center">
          Hi There!{" "}
          <span className="ml-2">
            <WavingHand />
          </span>
        </h2>
        <h1 className="text-5xl  text-purple-500">
          <span className="text-white">I'm</span> programmer
        </h1>
        <p className="text-5xl text-purple-400 min-h-[50px] pt-10">
          {" "}
          <Typewriter
            words={["Effective Problem Solver", "Front-End Web Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>

      <div className="mt-10 md:mt-0 flex-shrink-0">
        {" "}
        <img
          src="images/title.png"
          alt="Developer Illustration"
          className="w-[500px] max-w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default PortfolioHeader;
