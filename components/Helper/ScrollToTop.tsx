'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return <div>ScrollToTop</div>;
};

export default ScrollToTop;
