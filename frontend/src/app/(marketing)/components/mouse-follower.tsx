// src/components/MouseFollower.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
  // Motion values for x and y positions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply a spring to smooth the movement
  const springConfig = { damping: 20, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      mouseX.set(event.clientX - 25); // Adjusting for the div's size
      mouseY.set(event.clientY - 25);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 10,
        left: 10,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        pointerEvents: "none", // So it doesn't block other interactions
        x: x,
        y: y,
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;
