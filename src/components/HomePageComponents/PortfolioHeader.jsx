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
    <div className="bg-gradient-to-b  text-white min-h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-20 gap-y-6 md:gap-y-0">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 flex-1 "
      >
        <h2 className="text-3xl md:text-5xl font-bold flex items-center">
          Hi There!{" "}
          <span className="ml-3">
            <WavingHand />
          </span>
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-white">I'm </span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Programmer
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-purple-400 font-semibold">
          <Typewriter
            words={["Effective Problem Solver", "Front-End Web Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-2 md:mt-0 flex-shrink-0"
      >
        <img
          src="images/title.png"
          alt="Developer Illustration"
          className="w-[260px] md:w-[450px] h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </motion.div>
    </div>
  );
};

export default PortfolioHeader;
