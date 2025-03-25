'use client';
import React, { useEffect, useState } from 'react';


// Fonts 
import { Montserrat } from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});


const NavbarExp = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#262626] text-white px-6 py-1 shadow-md z-50 fixed top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" >
        {/* Left: Logo and College Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/niamt.png" // Replace with your logo path
            alt="College Logo"
            className="h-10 w-10"
          />
          <span className={`${montserrat.className} text-xl font-bold`}>NIAMT Ranchi</span>
        </div>

        {/* Right: Navigation Links */}
        <ul className={`${montserrat.className} hidden md:flex space-x-6 text-sm font-medium font-OpenSans`}>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#about">About</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="/events">Events</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#registration">Registration</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#speakers">Speakers</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#schedule">Schedule</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#gallery">Gallery</Link>
            </li>
            <li className="hover:text-[#fac42b] cursor-pointer">
            <Link href="#contact">Contact</Link>
            </li>
        </ul>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarExp;