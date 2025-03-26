'use client';
import { useEffect } from 'react';

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default ScrollToTopWrapper;