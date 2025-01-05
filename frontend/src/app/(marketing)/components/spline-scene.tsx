// src/components/MemoizedSpline.jsx
import React from "react";
import Spline from "@splinetool/react-spline/next";

const SplineScene = () => {
  return (
    <Spline
      // scene="/hero_bg.spline"
      scene="https://prod.spline.design/UH96ezTfw3ECCfPx/scene.splinecode"
      className="absolute h-full w-full"
    />
  );
};

export default React.memo(SplineScene);
