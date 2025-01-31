// Example.jsx
interface HelenProps {
  color1: string;
  color2: string;
  activeIndex: number;
  prevIndex: number;
}
export default function Helen({ color1, color2, activeIndex, prevIndex }: HelenProps) {
  // You can split your text into letters or manually place them
  const group1 = ["H", "E", "L"];
  const group2 = ["E", "N"];
  const group3 = ["Y", "O", "S"];
  const group4 = ["E", "P", "H"];

  return (
    <div className="fixed w-screen h-screen z-50 pointer-events-none">
      {activeIndex == 1 && prevIndex == 0 ? (
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

          {/* GROUP 3 */}
          <div
            className="
            fixed bottom-36 left-56
            font-[family-name:var(--font-bebas-regular)]
            text-[14rem] leading-none
            flex space-x-4
          "
            style={{ color: color2 }}
          >
            {group3.map((letter, i) => (
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
        activeIndex == 0 && (
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

            {/* GROUP 3 */}
            <div
              className="
            fixed bottom-36 left-56
            font-[family-name:var(--font-bebas-regular)]
            text-[14rem] leading-none
            flex space-x-4
          "
              style={{ color: color2 }}
            >
              {group3.map((letter, i) => (
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
