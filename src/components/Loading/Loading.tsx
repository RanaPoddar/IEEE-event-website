"use client";

import Lottie from "react-lottie-player";
import loadingAnimation from "../../../public/assets/loading.json" 
import "./Loading.css";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <Lottie 
        loop 
        animationData={loadingAnimation} 
        play 
        className="w-40 h-40"
      />
      <p className="mt-4 text-lg font-semibold tracking-wide animate-pulse">
        Loading....
      </p>
    </div>
  );
};

export default Loading;