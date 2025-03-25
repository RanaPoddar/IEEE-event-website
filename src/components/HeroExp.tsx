'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

// Fonts 
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Merriweather, Poppins } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})


const slides = [
  {
    title: "Research Opportunities in Computer Science (ROCS)",
    description: "The Annual Research and Innovation Showcase of NIAMT Ranchi",
    bgImage: "/bg-2.jpeg",
  },
  {
    title: "Explore Innovation",
    description: "Join us to witness groundbreaking research and technology",
    bgImage: "/bg-1.jpg",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ y: direction === 1 ? "100%" : "-100%", opacity: 1 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: direction === 1 ? "-100%" : "100%", opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col items-center justify-end md:justify-center text-white text-center px-6"
            style={{ backgroundImage: `url(${slides[index].bgImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 pb-15 md:pb-0 flex flex-col items-center">
              <h1 className={`${montserrat.className} text-3xl md:text-5xl font-MonsterRat font-bold md:w-3/4`}>{slides[index].title}</h1>
              <div className="relative mt-4 w-40 h-1 bg-customYellow"></div>
              <p className={`${montserrat.className} mt-4 text-lg md:text-xl max-w-2xl `}>{slides[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 cursor-pointer rounded-full z-20"
      >
        <MdArrowBackIos className="cursor-pointer" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.2, x: -10 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full z-20"
      >
        <MdArrowForwardIos className="cursor-pointer"/>
      </motion.button>
    </div>
  );
}
