'use client';

import React from 'react';
// Fonts 
import { Merriweather} from "next/font/google";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
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