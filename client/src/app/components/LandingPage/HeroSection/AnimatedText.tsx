'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  display: block;
`;

const Line = styled.div`
  display: block;
`;

const Letter = styled.span<{ $isVisible: boolean }>`
  display: inline-block;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

interface AnimatedTextProps {
  text: string;
  delay?: number; // Delay between each letter (in ms)
  startDelay?: number; // Initial delay before animation starts (in ms)
  className?: string;
}

export function AnimatedText({ 
  text, 
  delay = 50, 
  startDelay = 200,
  className = '' 
}: AnimatedTextProps) {
  const [visibleLetters, setVisibleLetters] = useState<number>(0);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  // Split text into lines
  const lines = text.split('\n');
  const allChars = text.split('').filter(char => char !== '\n');

  useEffect(() => {
    // Clear any existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];
    
    // Reset visible letters
    setVisibleLetters(0);

    // Recalculate allChars inside useEffect to avoid stale closures
    const chars = text.split('').filter(char => char !== '\n');

    // Start animation after initial delay
    const startTimer = setTimeout(() => {
      // Animate each character sequentially
      chars.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisibleLetters(index + 1);
        }, index * delay);
        timeoutRefs.current.push(timer);
      });
    }, startDelay);

    timeoutRefs.current.push(startTimer);

    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, [text, delay, startDelay]);

  let globalCharIndex = 0;

  return (
    <TextContainer className={className}>
      {lines.map((line, lineIndex) => {
        const lineChars = line.split('');
        const lineStartIndex = globalCharIndex;
        
        return (
          <Line key={lineIndex}>
            {lineChars.map((char, charIndex) => {
              const currentGlobalIndex = globalCharIndex;
              globalCharIndex++;
              return (
                <Letter
                  key={charIndex}
                  $isVisible={currentGlobalIndex < visibleLetters}
                >
                  {char === ' ' ? '\u00A0' : char}
                </Letter>
              );
            })}
          </Line>
        );
      })}
    </TextContainer>
  );
}

