import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import './nav.css'
export default function Progressbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className="progress-bar" style={{ scaleX }} >
    <div className="hello">g</div>
  </motion.div>;
}
