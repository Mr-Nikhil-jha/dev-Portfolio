// components/AnimatedOnScroll.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedOnScroll = ({ children, delay = 0, duration = 1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
