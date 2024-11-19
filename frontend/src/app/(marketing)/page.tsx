"use client"
import { Navbar } from "./components/navbar";
import Spline from '@splinetool/react-spline/next';
import Video from "./components/video";
import { ReactLenis } from "@studio-freight/react-lenis";
import { MarqueeDemo } from "./components/marquee";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
    <div className="bg-black flex flex-col h-full">
      {/* Navbar remains fixed */}
      <Navbar />

      {/* Sticky Scrolling Container */}
      <div className="flex flex-col h-[200vh]">
        {/* Sticky Section */}
        <div className="sticky top-[-20px] h-screen flex items-center justify-center">
          <Spline
            scene="https://prod.spline.design/UH96ezTfw3ECCfPx/scene.splinecode"
            className="absolute h-full w-full"
          />
          <div>
              <div className="isolate text-[18vh] tracking-tight font-[family-name:var(--font-bebas-regular)]
                leading-[15vh] text-white mix-blend-normal">
                RESULTS MADE
              </div>
              <div className="z-[9999] text-center pointer-events-none mix-blend-difference">

                  <div className="relative text-[18vh] tracking-tight font-[family-name:var(--font-bebas-regular)]
                  leading-[15vh] text-white mix-blend-difference">
                    TRANSPARENT
                  </div>
               </div>
          </div>
        </div>

        {/* Scrollable Section */}
        <div className=" h-[100vh] flex flex-col items-center justify-center">
          <Video />
        </div>
      </div>



      <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center gap-4">
        <div className="text-white font-[family-name:var(--font-lark-regular)]">
          SUCCEED WITH
        </div>
        <div className="relative text-[7.5rem] tracking-tight font-[family-name:var(--font-bebas-regular)]
                  leading-[15vh] text-white/20
                  transition cursor-pointer  hover:bg-rainbow bg-rainbow animate-rainbow bg-clip-text">
          YOUR VISION + OUR EXPERTISE
        </div>


      </div>
      <div className="mb-20">
      <MarqueeDemo />
      </div>


      <div className="h-[100vh] w-full bg-black flex flex-col gap-20 pl-16 mb-20">
          <div className="relative text-[6rem] tracking-tight font-[family-name:var(--font-bebas-regular)]
                    leading-[5.1rem] text-white mt-24">
            <h1 className="w-[70vw]">
              Building secure and scalable brand architecture with you.
            </h1>
          </div>

          <div className="flex flex-col gap-20">
            <div className="flex text-white gap-20">
              <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                01
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                  Innovation Launchpad
                </div>
                <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                  Our industry leading thought leadership team will help lead your vision into a digital
                  product ready to disrupt the market and raise funding by being your start
                  up accelerator.
                </div>
              </div>
            </div>



            <div className="flex text-white gap-20">
              <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                02
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                  Brand Visionary
                </div>
                <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                  Our industry leading thought leadership team will help lead your vision into a digital
                  product ready to disrupt the market and raise funding by being your start
                  up accelerator.
                </div>
              </div>
            </div>




            <div className="flex text-white gap-20">
              <div className="h-full font-[family-name:var(--font-lark-regular)] text-3xl">
                03
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-[family-name:var(--font-lark-regular)] text-3xl">
                  Technical Growth
                </div>
                <div className="font-[family-name:var(--font-lark-thin)] w-[32rem]">
                  Our industry leading thought leadership team will help lead your vision into a digital
                  product ready to disrupt the market and raise funding by being your start
                  up accelerator.
                </div>
              </div>
            </div>



          </div>

      </div>

    </div>
    </ReactLenis>
  );
}
