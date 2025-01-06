// Import necessary modules and components
"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "./components/navbar";
import Video from "./components/video";
import { ReactLenis } from "@studio-freight/react-lenis";
import { MarqueeDemo } from "./components/marquee";
import Marquee from "@/components/ui/marquee";
import { Marquee3D } from "./components/3d_marquee";
import MouseFollower from "./components/mouse-follower";
import { Work } from "./components/partner-works";
import Footer from "./components/footer";
import { WithUs } from "./components/work-with-us";
import TypingAnimation from "@/components/ui/typing-animation";
import WordPullUp from "@/components/ui/word-pull-up";
import { useRouter } from "next/navigation";
// import SplineScene from "./components/spline-scene";

// Dynamic import of SplineScene with SSR disabled
// const SplineScene = dynamic(() => import("./components/spline-scene"), {
//   ssr: false,
//   loading: () => <>loading</>, // Fallback UI during loading
// });

const SplineScene = dynamic(() => import("./components/spline-scene"), {
  ssr: false,
  loading: () => (
    <img className="fixed top-0 h-full w-full cursor-" src="/placeholder.jpg" />
  ),
});

// Preload the SplineScene component as early as possible
// Initiates loading immediately

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div className="bg-black flex flex-col h-full">
        {/* Navbar remains fixed */}
        <Navbar />

        {/* Sticky Scrolling Container */}
        <div className="flex flex-col h-[200vh]">
          {/* Sticky Section */}
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {/* Conditionally render SplineScene only if at the top */}
            {isAtTop && (
              <Suspense
                fallback={
                  <img
                    className="fixed top-0 h-full w-full"
                    src="/placeholder.jpg"
                  />
                }
              >
                {/* <Spline
                  scene="https://prod.spline.design/UH96ezTfw3ECCfPx/scene.splinecode"
                  className={`absolute h-full w-full ${isAtTop ? "" : "hidden"}`}
                /> */}
                <SplineScene />
              </Suspense>
            )}

            {/* Overlay Text */}
            <div>
              <div className="isolate text-[18vh] tracking-tight font-[family-name:var(--font-bebas-regular)] leading-[15vh] text-white mix-blend-normal">
                RESULTS MADE
              </div>
              <div className="z-[9999] text-center pointer-events-none mix-blend-difference">
                <div className="relative text-[18vh] tracking-tight font-[family-name:var(--font-bebas-regular)] leading-[15vh] text-white mix-blend-difference">
                  TRANSPARENT
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Section */}
          <div className="h-[100vh] flex flex-col items-center justify-center">
            <Video />
          </div>
        </div>

        {/* Rest of your components */}
        <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center gap-4">
          <WordPullUp
            className="text-white font-[family-name:var(--font-lark-regular)] text-md"
            words="SUCCEED WITH"
          />

          <TypingAnimation
            text="YOUR VISION + OUR EXPERTISE"
            duration={50}
            className="relative text-[7.5rem] tracking-tight font-[family-name:var(--font-bebas-regular)] leading-[15vh] text-white/20 transition cursor-pointer hover:bg-rainbow bg-rainbow animate-rainbow bg-clip-text"
          />
        </div>
        <div className="mb-20">
          <MarqueeDemo />
        </div>

        <div className="h-[100vh] w-full bg-black flex flex-col gap-20 pl-16 mb-20">
          <div className="relative text-[6rem] tracking-tight font-[family-name:var(--font-bebas-regular)] leading-[5.1rem] text-white mt-24">
            <h1 className="w-[70vw]">
              Building secure and scalable brand architecture with you.
            </h1>
          </div>

          <div className="flex gap-48">
            <div className="flex flex-col gap-20">
              {/* Section 01 */}
              <div className="flex text-white gap-20">
                <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                  01
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                    Innovation Launchpad
                  </div>
                  <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                    Our industry leading thought leadership team will help lead
                    your vision into a digital product ready to disrupt the
                    market and raise funding by being your start up accelerator.
                  </div>
                </div>
              </div>

              {/* Section 02 */}
              <div className="flex text-white gap-20">
                <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                  02
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                    Brand Visionary
                  </div>
                  <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                    Our industry leading thought leadership team will help lead
                    your vision into a digital product ready to disrupt the
                    market and raise funding by being your start up accelerator.
                  </div>
                </div>
              </div>

              {/* Section 03 */}
              <div className="flex text-white gap-20">
                <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                  03
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                    Technical Growth
                  </div>
                  <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                    Our industry leading thought leadership team will help lead
                    your vision into a digital product ready to disrupt the
                    market and raise funding by being your start up accelerator.
                  </div>
                </div>
              </div>
            </div>

            <Marquee3D />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <MouseFollower />
          <div className=" flex flex-col mb-64">
            <div className="flex items-center justify-center w-full text-[16rem] text-white h-screen">
              <h1 className="font-[family-name:var(--font-bebas-regular)] pointer-events-none">
                [OUR CASES]
              </h1>
            </div>
            <div
              className="flex flex-col items-center gap-8 text-white cursor-pointer"
              onClick={() => {
                router.push("/partners");
              }}
            >
              <div className="flex justify-between p-8 w-[calc(100vw-80px)] group hover:bg-muted-foreground/20 transition-colors duration-300 rounded-xl">
                <div className="flex gap-4 items-end">
                  <img
                    src="/trainly.png"
                    width={400}
                    className="rounded-xl group-hover:rounded-[3rem] transition-all duration-500"
                  />
                  <div className="font-[family-name:var(--font-lark-regular)] text-7xl">
                    TRAINLY
                  </div>
                </div>
                <div className="flex flex-col justify-between w-72">
                  <h1 className="font-[family-name:var(--font-bebas-regular)] text-2xl text-indigo-300">
                    [CAMPAIGN]
                  </h1>
                  <p className="font-[family-name:var(--font-lark-regular)]">
                    Some text here talking about what we did to help Trainly
                    grow and the marketing techniques we used.
                  </p>
                </div>
              </div>

              <div
                className="flex justify-between p-8 w-[calc(100vw-80px)] cursor-pointer group hover:bg-muted-foreground/20 transition-colors duration-300 rounded-xl"
                onClick={() => {
                  router.push("/partners");
                }}
              >
                <div className="flex gap-4 items-end">
                  <img
                    src="/helen_y.jpeg"
                    width={400}
                    className="rounded-xl group-hover:rounded-[3rem] transition-all duration-500"
                  />
                  <div className="font-[family-name:var(--font-lark-regular)] text-7xl w-10">
                    HELEN YOSEPH
                  </div>
                </div>
                <div className="flex flex-col justify-between w-72">
                  <h1 className="font-[family-name:var(--font-bebas-regular)] text-2xl text-indigo-300">
                    [CAMPAIGN]
                  </h1>
                  <p className="font-[family-name:var(--font-lark-regular)]">
                    Some text here talking about what we did to help Trainly
                    grow and the marketing techniques we used.
                  </p>
                </div>
              </div>

              <div
                className="flex justify-between p-8 w-[calc(100vw-80px)] cursor-pointer group hover:bg-muted-foreground/20 transition-colors duration-300 rounded-xl"
                onClick={() => {
                  router.push("/partners");
                }}
              >
                <div className="flex gap-4 items-end">
                  <img
                    src="/np_mockup_new.jpeg"
                    width={400}
                    className="rounded-xl group-hover:rounded-[3rem] transition-all duration-500"
                  />
                  <div className="font-[family-name:var(--font-lark-regular)] text-7xl w-10">
                    NOTEPOD
                  </div>
                </div>
                <div className="flex flex-col justify-between w-72">
                  <h1 className="font-[family-name:var(--font-bebas-regular)] text-2xl text-indigo-300">
                    [CAMPAIGN]
                  </h1>
                  <p className="font-[family-name:var(--font-lark-regular)]">
                    Some text here talking about what we did to help Trainly
                    grow and the marketing techniques we used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WithUs />

        <Footer />
      </div>
    </ReactLenis>
  );
}
