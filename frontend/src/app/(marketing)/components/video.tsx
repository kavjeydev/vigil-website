"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScaleOnScroll() {
  // Capture the scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale:
  // 0 -> 1
  // 0.5 -> 1.5
  // 1 -> 1.5 (no further scaling)
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1.5, 1.5]);

  // className="relative text-[7.5rem] tracking-tight font-[family-name:var(--font-bebas-regular)]
  //                 leading-[15vh] text-white/20
  //                 transition cursor-pointer  hover:bg-rainbow bg-rainbow animate-rainbow bg-clip-text"

  return (
    <div style={{ height: "200vh", background: "black" }}> {/* Increased height for scrolling */}
      <motion.div
        style={{
          scale, // Bind scale to the scroll progress
          background: "transparent",
          height: "64.6666vh",
          width: "64.6666vw",
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px",
        }}
      >

        <video autoPlay muted loop playsInline>
          <source src="/temp_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
