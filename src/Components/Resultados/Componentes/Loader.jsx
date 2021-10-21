import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../public/images/lotties/loading-green.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={600} />
    </div>
  );
}
