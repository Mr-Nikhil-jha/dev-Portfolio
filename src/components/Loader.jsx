// components/Loader.js
import React, { useEffect, useState } from "react";
// import "./Loader.css";

const Loader = ({ isActive, onComplete }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete(); // Call back to parent to turn off isActive
      }, 1000); // Match this with animation duration

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return visible && <div className="linediv"></div>;
};

export default Loader;
