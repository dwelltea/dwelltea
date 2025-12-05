'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const AccordionContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 56px;
  padding: 0 32px;
  background-color: #1a3d2e;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover:not(:disabled) {
    background-color: #152f24;
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    background-color: #0f1f18;
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
  }
  
  &:disabled {
    background-color: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const AccordionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const AccordionIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '10000px' : '0')};
  overflow: hidden;
  transition: max-height ${({ $isOpen }) => ($isOpen ? '1.2s' : '0.6s')} cubic-bezier(0.4, 0, 0.2, 1);
  scroll-margin-top: 20px;
`;

const AccordionInner = styled.div`
  padding: 32px 0 0 0;
`;

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    const willBeOpen = !isOpen;
    setIsOpen(willBeOpen);
    
    // Track if this is the first time opening
    if (willBeOpen && !hasOpenedBefore) {
      setHasOpenedBefore(true);
    }
  };

  useEffect(() => {
    // Scroll to accordion content when opening for the first time
    if (isOpen && !hasOpenedBefore && contentRef.current) {
      // Small delay to ensure the accordion has started opening
      const timer = setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasOpenedBefore]);

  return (
    <AccordionContainer className={className}>
      <AccordionHeader $isOpen={isOpen} onClick={toggleAccordion} type="button">
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon $isOpen={isOpen}>
          <ChevronDown size={20} />
        </AccordionIcon>
      </AccordionHeader>
      <AccordionContent ref={contentRef} $isOpen={isOpen}>
        <AccordionInner>{children}</AccordionInner>
      </AccordionContent>
    </AccordionContainer>
  );
};
