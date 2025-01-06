"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import { Navbar } from "../components/navbar";
import MouseFollower from "../components/mouse-follower";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();

  // Track the viewport height
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
      console.log(window.innerHeight);
    };
    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  /************************************
   * Div 1 (unchanged)
   ************************************/
  const div1Scale = useTransform(scrollYProgress, [0.0, 0.1, 0.2], [1, 1, 0.8]);
  const div1Y = useTransform(scrollYProgress, [0.2, 0.3], [0, -viewportHeight]);

  /************************************
   * Div 2 (unchanged)
   ************************************/
  const div2Scale = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0.8, 1, 0.8],
  );
  const div2Y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.5, 0.6],
    [viewportHeight, 0, 0, -viewportHeight],
  );

  /************************************
   * Div 3 (unchanged)
   ************************************/
  const div3Scale = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0.8, 1, 1]);
  const div3Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 0.9],
    [viewportHeight, 0, 0, -viewportHeight],
  );

  /***********************************************
   * Div 4: Waits until Div 3 is off-screen (~0.9),
   * then slides up & scales from 0.8→1.
   * It's FIXED, so we can't see content below
   * until we exit this container at 1.0.
   ***********************************************/
  const div4Scale = useTransform(scrollYProgress, [0.9, 1], [1, 1]);

  // Slide Div 4 from offscreen (viewportHeight) to 0 over 0.8→0.9
  // so it arrives at the top exactly as Div 3 finishes leaving.
  const div4Y = useTransform(scrollYProgress, [0.8, 0.9], [viewportHeight, 0]);

  return (
    <div>
      {/* Fixed Background Layer */}
      <Navbar />
      <MouseFollower />
      <div
        className="fixed top-0 left-0 w-full h-full
                   bg-[url('/vigil_backdrop_n.jpeg')] bg-no-repeat bg-center bg-cover
                   z-0 overflow-auto"
      ></div>

      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        {/**
         * SECTION 1: "Partners" at the top
         */}
        <div className="flex flex-col">
          <section
            className="
            relative
            flex
            items-center
            justify-center
            w-full
            h-screen
            z-50
            text-white
            bg-black

          "
          >
            <h1 className="text-[12rem] font-bold font-[family-name:var(--font-bebas-regular)]">
              Partners
            </h1>
          </section>

          {/**
           * SECTION 2: The giant container (1000vh) for Divs 1–4
           */}
          <div className="relative h-[1000vh] w-full z-10">
            {/* Div 1 */}
            <motion.div
              className="
              fixed top-0 left-0 h-screen w-full
              flex items-start justify-start
              origin-center z-50
              bg-gradient-to-tr from-white via-white to-orange-100
              pt-8 pl-12 cursor-pointer
            "
              style={{ scale: div1Scale, y: div1Y }}
            >
              <div className="h-full w-full flex">
                <div className="h-full w-full flex flex-col overflow-clip gap-4">
                  <div
                    className="
                    text-[5.28rem] w-[1200px] leading-[1] p-1
                    font-[family-name:var(--font-bebas-regular)]
                    z-[9999] text-black
                  "
                  >
                    Successfully{" "}
                    <span className="text-[#FF8C42]">Revamped</span> Product
                    Suite Consistent Digital{" "}
                    <span className="text-[#FF8C42]">Experience</span> Across
                    Improved CSAT Score
                  </div>

                  <div className="relative">
                    <img
                      src="/np_mockup_new.jpeg"
                      height={200}
                      width={1050}
                      alt="mockup"
                    />
                  </div>
                </div>
                <img
                  src="/black_np.png"
                  height={40}
                  width={400}
                  className="absolute bottom-0 right-0 mb-[10.5rem] -mr-40 -rotate-90"
                  alt="black_np"
                />
              </div>
            </motion.div>

            {/* Div 2 */}
            <motion.div
              className="
              sticky top-0 left-0 h-screen w-full
              flex items-start justify-start
              origin-center z-50 bg-orange-100 bg-cover
              cursor-pointer
            "
              style={{ scale: div2Scale, y: div2Y }}
            >
              <div className="flex flex-col h-full w-full">
                <div className="h-1/2 w-full">Top half</div>
                <div className="flex h-1/2 w-full items-center justify-center gap-20">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-5xl">Quixotic</h1>
                    <h3>
                      Reimagining The DailyWire as a premium content provider
                      through technology
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Div 3 */}
            <motion.div
              className="
              fixed top-0 left-0 h-screen w-full
              flex items-start justify-start
              origin-center z-50
              bg-[url('/helen_mock.jpeg')] bg-cover bg-no-repeat
              pt-8 pl-14 cursor-pointer
            "
              style={{ scale: div3Scale, y: div3Y }}
            >
              {/* Div 3 content here */}
            </motion.div>

            {/**
             * Div 4
             * - Waits offscreen until scrollYProgress=0.8 → 0.9
             *   slides from y=viewportHeight to 0
             * - Then from 0.9 → 1.0 it scales 0.8 → 1
             * - Because it's FIXED, we won't see normal content until
             *   scroll reaches 1.0 and we exit this container.
             */}
            {/* <motion.div
              className="
              sticky top-0 left-0 h-screen w-full
              flex items-start justify-start
              origin-center z-50
              bg-[url('/helen_mock.jpeg')] bg-cover bg-no-repeat
              pt-8 pl-14 cursor-pointer
              pb-80
            "
              style={{
                scale: div4Scale,
                y: div4Y,
              }}
            >
              <h1 className="text-white text-4xl">Div 4</h1>
            </motion.div> */}
          </div>

          {/**
           * SECTION 3: Normal scrolling content
           * Appears AFTER the 1000vh container ends (scrollYProgress=1)
           */}
          <section
            className="
            relative
            flex
            flex-col
            items-center
            justify-center
            w-full
            top-80
            z-50
            text-white
            bg-black
          "
          >
            <div
              className="relative
            flex
            items-center
            justify-center
            w-full
            h-screen
            z-50
            text-white
            bg-black"
            >
              <h1 className="text-[12rem] font-bold font-[family-name:var(--font-bebas-regular)]">
                Partners
              </h1>
            </div>
            <div
              className="relative
            flex
            items-center
            justify-center
            w-full
            h-screen
            z-50
            text-white
            bg-black"
            >
              <h1 className="text-[12rem] font-bold font-[family-name:var(--font-bebas-regular)]">
                Partners
              </h1>
            </div>
          </section>
        </div>
      </ReactLenis>
    </div>
  );
}
