import { useEffect, useState } from "react";

// Example.jsx
interface NotepodProps {
  color1: string;
  color2: string;
  activeIndex: number;
  visited: boolean;
  prevIndex: number;
}
export default function Trainly({
  color1,
  color2,
  activeIndex,
  visited,
  prevIndex,
}: NotepodProps) {
  // You can split your text into letters or manually place them
  const group1 = [""];
  const group2 = ["T", "R", "A", "I", "N"];
  const group4 = ["L", "Y"];

  useEffect(() => {
    // After first render, set isFirstLoad to false so any future slide change can animate out
    setTimeout(() => {}, 1000);
  }, []);
  console.log(activeIndex, prevIndex, visited, "trainly");
  return (
    <div className="fixed w-screen h-screen z-50 pointer-events-none">
      {activeIndex == 1 && prevIndex == 2 && visited ? (
        <div className="fixed w-screen h-screen z-50 pointer-events-none">
          {/* GROUP 1 */}

          <div
            className="
              fixed top-24 left-20
              font-[family-name:var(--font-bebas-regular)]
              text-[14rem] leading-none
              flex space-x-4
            "
            style={{ color: color2 }}
          >
            {group1.map((letter, i) => (
              <div
                key={i}
                className="overflow-hidden"
                // Using a fixed width/height can help if your letters get clipped incorrectly
                // e.g. w-[120px] h-[160px]
              >
                <h1
                  className="
                    translate-y-full
                    opacity-0
                    animate-slideOut
                  "
                  //   style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {letter}
                </h1>
              </div>
            ))}
          </div>

          {/* GROUP 2 */}
          <div
            className="
              fixed top-24 right-80
              font-[family-name:var(--font-bebas-regular)]
              text-[14rem] leading-none
              flex space-x-4
            "
            style={{ color: color2 }}
          >
            {group2.map((letter, i) => (
              <div key={i} className="overflow-hidden">
                <h1
                  className="
                    translate-y-full
                    opacity-0
                    animate-slideOut
                  "
                  //   style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {letter}
                </h1>
              </div>
            ))}
          </div>

          {/* GROUP 4 */}
          <div
            className="
              fixed bottom-36 right-80
              font-[family-name:var(--font-bebas-regular)]
              text-[14rem] leading-none
              flex space-x-4
            "
            style={{ color: color2 }}
          >
            {group4.map((letter, i) => (
              <div key={i} className="overflow-hidden">
                <h1
                  className="
                    translate-y-full
                    opacity-0
                    animate-slideOut
                  "
                  //   style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {letter}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        activeIndex == 2 && (
          <div className="fixed w-screen h-screen z-50 pointer-events-none">
            {/* GROUP 1 */}
            <div
              className="
                fixed top-24 left-20
                font-[family-name:var(--font-bebas-regular)]
                text-[14rem] leading-none
                flex space-x-4
              "
              style={{ color: color2 }}
            >
              {group1.map((letter, i) => (
                <div
                  key={i}
                  className="overflow-hidden"
                  // Using a fixed width/height can help if your letters get clipped incorrectly
                  // e.g. w-[120px] h-[160px]
                >
                  <h1
                    className="
                      translate-y-full
                      opacity-0
                      animate-slideIn
                    "
                    //   style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {letter}
                  </h1>
                </div>
              ))}
            </div>

            {/* GROUP 2 */}
            <div
              className="
                fixed top-24 right-80
                font-[family-name:var(--font-bebas-regular)]
                text-[14rem] leading-none
                flex space-x-4
              "
              style={{ color: color2 }}
            >
              {group2.map((letter, i) => (
                <div key={i} className="overflow-hidden">
                  <h1
                    className="
                      translate-y-full
                      opacity-0
                      animate-slideIn
                    "
                    //   style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {letter}
                  </h1>
                </div>
              ))}
            </div>

            {/* GROUP 4 */}
            <div
              className="
                fixed bottom-36 right-80
                font-[family-name:var(--font-bebas-regular)]
                text-[14rem] leading-none
                flex space-x-4
              "
              style={{ color: color2 }}
            >
              {group4.map((letter, i) => (
                <div key={i} className="overflow-hidden">
                  <h1
                    className="
                      translate-y-full
                      opacity-0
                      animate-slideIn
                    "
                    //   style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {letter}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        )
      )}

    </div>
  );
}
