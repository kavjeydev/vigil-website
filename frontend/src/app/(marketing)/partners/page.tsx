"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

const content = [
  {
    color1: "#FFFFFF",
    color2: "#000000",
    image: "helen_y.jpeg",
    name: "Helen Yoseph",
  },
  {
    color1: "#FFFFFF",
    color2: "#000000",
    image: "np_mockup_new.jpeg",
    name: "Notepod",
  },
  {
    color1: "#FFFFFF",
    color2: "#000000",
    image: "helen_y.jpeg",
    name: "Trainly",
  },
];

const items = [
  "Slide 1 Content",
  "Slide 2 Content",
  "Slide 3 Content",
  "Slide 4 Content",
  "Slide 5 Content",
];

export default function CarouselSwiper() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <Swiper
          // Keep it horizontal
          direction="horizontal"
          // Set one slide per view
          slidesPerView={1.5}
          // Add navigation arrows
          centeredSlides
          navigation
          // Add pagination dots
          pagination={{ clickable: true }}
          // Enable mousewheel control
          mousewheel={{
            // `forceToAxis: true` ensures wheel scroll only affects the Swiper
            // if we scroll in the correct axis direction.
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          // Slows down the transition speed (in ms). Adjust to taste.
          speed={1000}
          className="w-full h-full flex items-center justify-center"
          spaceBetween={50}
        >
          {content.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-red-400 flex items-center justify-center"
            >
              <div
                className={`w-[80%] h-[70%] flex items-center justify-center bg-[url(/${item.image})] bg-contain rounded-lg shadow-md text-2xl`}
              >
                {item.name}
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
