import React, { useEffect, useRef, useState } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypewriterEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      if (!isDeleting && displayText !== currentPhrase) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else if (!isDeleting && displayText === currentPhrase) {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else if (isDeleting && displayText !== '') {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, phraseIndex, phrases, isTyping, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={`font-mono text-white relative ${className}`}>
      <span className="mr-1">{displayText}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
}