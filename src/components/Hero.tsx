// components/HeroSection.js
"use client";

import { motion } from "motion/react"

export default function HeroSection() {
  // Floating graphics animation
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center  overflow-hidden"> {/*bg-gradient-to-br from-[#F9FAFC] to-[#E9ECEF]*/}
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-IEEEBlue rounded-full opacity-30"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-customYellow rounded-full opacity-30"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-IEEEBlue rounded-full opacity-20"
        animate={floatAnimation}
      />

      {/* Hero Content */}
      <div className="z-10">
        <img src="/niamt.png" alt="College Logo" className="w-40 h-40 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-IEEEBlue font-MerriWeather">National Institute of Advanced 
            <br />
        Manufacturing Technology (NIAMT), Ranchi</h2>
        <motion.h1
          className="text-3xl font-bold text-[#333333] md:text-4xl leading-snug font-poppins"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Workshop on <br />
          <span className="text-[#F4A261]">Research Opportunities</span>
          <br /> in Computer Science
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-2 text-lg font-medium cursor-pointer text-white bg-IEEEBlue rounded-2xl shadow-lg hover:bg-[#F4A261] transition"
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
}
