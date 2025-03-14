// components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-3 bg-white/30 backdrop-blur-lg rounded-3xl shadow-md flex space-x-6 text-[#333333] font-medium transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      <Link href="#home" className="hover:text-IEEEBlue transition font-poppins">
        Home
      </Link>
      <Link href="#schedule" className="hover:text-IEEEBlue transition font-poppins">
        Schedule
      </Link>
      <Link href="#contact" className="hover:text-IEEEBlue transition font-poppins">
        Contact
      </Link>
    </nav>
  )
}
