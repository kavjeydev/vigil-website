"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();

  // State to store the viewport height
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateViewportHeight();

    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  /*** Adjusted Scroll Ranges and Transforms ***/

  // **Div 1 Transforms**
  const div1Scale = useTransform(scrollYProgress, [0.0, 0.2], [1, 0.8]);
  const div1Y = useTransform(scrollYProgress, [0.2, 0.3], [0, -viewportHeight]);

  // **Div 2 Transforms**
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

  // **Div 3 Transforms**
  const div3Scale = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8],
    [0.8, 1, 0.8],
  );
  const div3Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 0.9],
    [viewportHeight, 0, 0, -viewportHeight],
  );

  // **Div 4 Transforms**
  const div4Scale = useTransform(scrollYProgress, [0.9, 1.0], [0.8, 1]);
  const div4Y = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1.0],
    [viewportHeight, 0, 0],
  );

  return (
    <>
      {/* Fixed Background Layer */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-[url('/vigil_backdrop_n.jpeg')] bg-no-repeat
        bg-center z-0 bg-cover"
      ></div>

      {/* Main Content */}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        <div className="relative h-[1000vh] w-full z-10">
          {/* Div 1 */}
          <motion.div
            className="fixed top-0 left-0 h-screen w-full flex items-start justify-start
            origin-center z-50 bg-gradient-to-tr from-white via-white to-orange-200
            bg-no-repeat pt-8 pl-12 cursor-pointer"
            style={{
              scale: div1Scale,
              y: div1Y,
            }}
          >
            <div className="h-full w-full flex">
              <div className="h-full w-full flex flex-col overflow-clip gap-4">
                <div className="text-[5.28rem] w-[1200px] leading-[1] p-1 font-[family-name:var(--font-bebas-regular)] z-[9999] text-black">
                  Successfully <span className="text-[#FF8C42]">Revamped</span>{" "}
                  Product Suite Consistent Digital{" "}
                  <span className="text-[#FF8C42]">Experience</span> Across
                  Improved CSAT Score
                </div>

                <div className="relative">
                  <img src="/np_mockup_new.jpeg" height={200} width={1050} />
                </div>
              </div>
              <img
                src="/black_np.png"
                height={40}
                width={400}
                className="absolute bottom-0 right-0 mb-[10.5rem] -mr-40 -rotate-90"
              />
            </div>
            {/* Container for Image, Title, and Underline */}
            {/* <motion.div
              className="flex flex-col items-start gap-1 relative"
              whileHover="hover"
              initial="rest"
              variants={{
                rest: {},
                hover: {},
              }}
            >
              <img
                src="/new_logo_white.png"
                height={70}
                width={150}
                alt="New Logo"
                className="object-contain cursor-pointer"
              />
              <motion.div
                className="h-0.5 bg-white w-[150px] origin-left cursor-pointer"
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <h1
                className="text-lg font-[family-name:var(--font-lark-regular)]
                  text-gray-300 relative cursor-pointer"
              >
                Enhanced user interface and experience with cutting-edge design
                solutions.
              </h1>
            </motion.div> */}

            {/* Animated Underline */}
          </motion.div>

          {/* Div 1 */}
          <motion.div
            className="fixed top-0 left-0 h-screen w-full flex items-start justify-start
            origin-center z-50 bg-orange-100 bg-cover
            bg-no-repeat cursor-pointer"
            style={{
              scale: div2Scale,
              y: div2Y,
            }}
          >
            <div className="flex flex-col h-full w-full">
              <div className="h-1/2 w-full">Top half</div>
              <div className="flex h-1/2 w-full items-center justify-center gap-20">
                <div className="flex flex-col gap-2">
                  <h1 className="text-5xl font-">Quixotic</h1>
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
            className="fixed top-0 left-0 h-screen w-full flex items-start justify-start
            origin-center z-50 bg-[url('/helen_mock.jpeg')] bg-cover
            bg-no-repeat pt-8 pl-14 cursor-pointer"
            style={{
              scale: div3Scale,
              y: div3Y,
            }}
          >
            {/* Container for Image, Title, and Underline */}
            <div></div>

            {/* Animated Underline */}
          </motion.div>

          {/* Div 4 */}
          <motion.div
            className="fixed top-0 left-0 h-screen w-full bg-yellow-500 flex items-center justify-center origin-center z-20 pointer-events-none"
            style={{
              scale: div4Scale,
              y: div4Y,
            }}
          >
            <h1 className="text-white text-4xl">Div 4</h1>
          </motion.div>
        </div>
      </ReactLenis>
    </>
  );
}
