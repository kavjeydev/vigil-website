"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import { TextAnimate } from "@/components/ui/text-animate";
import { PartnersNav } from "../components/partners-nav";
import Helen from "../components/helen_text";
import Notepod from "../components/notepod_text";

// Install modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

const content = [
  {
    color1: "#080911",
    color2: "#F0F0F0",
    image: "helen_y.jpeg",
    name: "Helen Yoseph",
  },
  {
    color1: "#FFE5CD",
    color2: "#FF7B00",
    image: "np_mockup_new.jpeg",
    name: "Note Pod",
  },
  {
    color1: "#FFFFFF",
    color2: "#000000",
    image: "helen_y.jpeg",
    name: "Trainly AI",
  },
];

export default function CarouselSwiper() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visitedIndices, setVisitedIndices] = useState<Array<number>>([]);

  useEffect(() => {
    if (!visitedIndices.includes(activeIndex)) {
      setVisitedIndices([...visitedIndices, activeIndex]);
    }
    console.log([...visitedIndices, activeIndex]);
  }, [activeIndex]);

  return (
    <>
      <PartnersNav textColor={content[activeIndex].color2} />
      <Helen color1="#080911" color2="#F0F0F0" activeIndex={activeIndex} />
      <Notepod
        color1="#FFCF99"
        color2="#FF7B00"
        activeIndex={activeIndex}
        visited={visitedIndices.includes(1)}
      />
      <div
        className={cn(
          `w-screen h-screen flex items-center justify-center transition-all duration-1000`,
        )}
        style={{ backgroundColor: `${content[activeIndex].color1}` }}
      >
        <Swiper
          direction="horizontal"
          slidesPerView={1.93}
          centeredSlides
          pagination={{ clickable: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          speed={1000}
          className="w-full h-full flex items-center justify-center"
          spaceBetween={150}
          allowTouchMove={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {content.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideTo(index);
                }
              }}
            >
              <div
                className={cn(
                  "flex items-center justify-center overflow-clip w-full transtion-all duration-1000",
                  index === activeIndex && "w-full px-0",
                )}
              >
                <div
                  className={cn(
                    ` h-[26rem]  text-2xl flex items-center justify-center overflow-hidden opacity-40
                      transition-all duration-1000 bg-cover w-[80%] grayscale`,
                    index === activeIndex && "opacity-100 w-full grayscale-0",
                  )}
                  style={{ backgroundImage: `url(/${item.image})` }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(
            0.25,
            0.1,
            0.25,
            1
          ) !important;
        }
      `}</style>
    </>
  );
}
