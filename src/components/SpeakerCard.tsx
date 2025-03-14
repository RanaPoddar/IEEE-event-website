'use client'
import React from 'react';
import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle, } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface SpeakerCardProps {
  image: string;
  name: string;
  details: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, details }) => {
  return (
    <motion.div
      className="group max-w-sm rounded overflow-hidden shadow-lg p-4 bg-softWhite"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <img className="w-full h-48 object-cover rounded-full mx-auto" src={image} alt={name} /> */}
      <div className="w-full flex justify-center">
    <Avatar className='h-40 w-40'>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 font-MerriWeather text-elegantOrange">{name}</div>
        <p className="text-gray-400 group:hover:text-green-800: text-base">{details}</p>
      </div>
    </motion.div>

  );
};

export default SpeakerCard;