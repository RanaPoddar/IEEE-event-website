'use client';

import React from 'react';
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

interface RegistrationStatusProps {
  isOpen: boolean; // Prop to determine if registration is open
}

const RegistrationStatus: React.FC<RegistrationStatusProps> = ({ isOpen }) => {
  return (
    <div className="w-full flex justify-center mt-8">
    <div className="max-w-4xl w-full bg-[#fdf4e6] py-4 text-center">
      <p className={`${merriweather.className} text-[#8b070e] font-bold text-lg animate-blink`}>
        {isOpen ? 'Registrations are now open...' : 'Registrations are closed...'}
      </p>
    </div>
    </div>
  );
};

export default RegistrationStatus;