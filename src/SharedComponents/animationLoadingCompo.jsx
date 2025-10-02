import Lottie from "lottie-react";
import React from "react";
import loading from "../assets/animations/loading_wave.json";

export default function AnimationLoadingCompo() {
  return (
    <div className="  d-flex align-items-center justify-content-center w-100">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
