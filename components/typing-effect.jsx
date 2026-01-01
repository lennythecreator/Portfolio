'use client';

import { useState, useEffect } from 'react';

export default function TypingEffect({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '',
  showCursor = true 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelaying, setIsDelaying] = useState(true);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setIsDelaying(false);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setIsDelaying(false);
    }
  }, [delay]);

  useEffect(() => {
    if (isDelaying) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isDelaying]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

