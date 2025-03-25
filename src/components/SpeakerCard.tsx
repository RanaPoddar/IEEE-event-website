'use client'
import React from 'react';
import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle, } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Fonts 
// import { Montserrat } from "next/font/google";
// import { Playfair_Display } from "next/font/google";
import { Merriweather, Poppins } from "next/font/google";
// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
//   display: 'swap',
// });
// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
//   display: 'swap',
// })
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


interface SpeakerCardProps {
  image: string;
  name: string;
  details: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, details }) => {
  return (
    <motion.div
      className="group max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <img className="w-full h-48 object-cover rounded-full mx-auto" src={image} alt={name} /> */}
      <div className="w-full flex justify-center">
    <Avatar className='h-40 w-40'>
    <AvatarImage src={image} />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
      <div className="px-6 py-4 text-center">
        <div className={`${merriweather.className} font-bold text-sm md:text-lg mb-2 font-MerriWeather text-headingColor`}>{name}</div>
        <div className="flex justify-center">
        <div className="w-16 h-1 bg-customYellow rounded-full mb-2"/>
        </div>
        <p className={`${poppins.className} text-gray-400 group:hover:text-green-800: text-sm`}>{details}</p>
      </div>
    </motion.div>

  );
};

export default SpeakerCard;