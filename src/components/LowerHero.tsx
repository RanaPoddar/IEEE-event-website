'use client';
import React from 'react';
import CountDown from './CountDown2';

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
  weight: ['300', '400', '700', '900'],
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})

const LowerHero = () => {
  return (
    <>
    {/* only for lg screen  */}
    <div className="bg-[#262626] border-t-3 border-white lg:h-[100px] hidden lg:flex items-center justify-end">
      

      {/* Join Workshop Section */}
      <div className=" h-full flex items-center flex-col text-black px-6 py-2">
        <div className={`${montserrat.className} text-4xl text-white font-bold`}>Join the Workshop</div>
        <div className={`${merriweather.className} text-sm font-[300] flex justify-end text-white`}>at Auditorium, NIAMT Ranchi</div>
      </div>


      {/* Event Timer */}
      <div className="flex items-center px-4 h-full bg-customYellow">
        <CountDown targetDate="2025-12-31T23:59:59" />
      </div>
    </div>

    {/* only for small to medium screen  */}
    <div className="flex flex-col mt-4 lg:hidden">
      {/* Join Workshop Section */}
      <div className=" h-full flex items-center flex-col text-black px-6 py-2">
        <div className={`${montserrat.className} text-2xl text-black font-bold`}>Join the Workshop</div>
        <div className={`${merriweather.className} text-sm font-[300] flex justify-end text-black`}>at Auditorium, NIAMT Ranchi</div>
      </div>

      {/* Event Timer */}
      <div className="flex items-center w-full justify-center mt-2 px-4 h-full">
        <CountDown targetDate="2025-12-31T23:59:59" />
      </div>
    </div>
    </>
  );
};

export default LowerHero;