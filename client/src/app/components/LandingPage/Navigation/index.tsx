'use client';

import React, { useState } from 'react';
import { Logo } from '@/ui-library/atoms/Logo';
import { Search, User, Menu, X, CircleQuestionMark } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  NavContainer,
  NavContent,
  NavLeft,
  NavLinks,
  NavLink,
  NavRight,
  IconButton,
  LogoLink,
  HamburgerButton,
  MobileMenu,
  MobileMenuOverlay,
  MobileMenuContent,
  MobileNavLinks,
  MobileNavLink,
  MobileNavLinkContent,
  MobileNavLinkIcon,
} from './index.styles';

interface NavigationProps {
  onSearchClick?: () => void;
  onHomeClick?: () => void;
}

export function Navigation({ onSearchClick, onHomeClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 769px)');

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick?.();
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick?.();
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer>
      <NavContent>
        <NavLeft>
          <LogoLink onClick={handleLogoClick} href="#" aria-label="Home">
            <Logo variant="horizontal" size="medium" />
          </LogoLink>
        </NavLeft>
        <NavRight>
          {isDesktop && <NavLink href="#about">About</NavLink>}
          <IconButton aria-label="Search" onClick={onSearchClick}>
            <Search size={20} />
          </IconButton>
          <IconButton aria-label="User profile">
            <User size={20} />
          </IconButton>
          <HamburgerButton 
            aria-label="Toggle menu" 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </HamburgerButton>
        </NavRight>
      </NavContent>
      
      <MobileMenu $isOpen={isMobileMenuOpen} aria-expanded={isMobileMenuOpen}>
        <MobileMenuOverlay $isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        <MobileMenuContent $isOpen={isMobileMenuOpen}>
          <MobileNavLinks>
            <MobileNavLink href="#about" onClick={handleNavLinkClick}>
              <MobileNavLinkContent>
                <MobileNavLinkIcon>
                  <CircleQuestionMark size={20} />
                </MobileNavLinkIcon>
                About
              </MobileNavLinkContent>
            </MobileNavLink>
          </MobileNavLinks>
        </MobileMenuContent>
      </MobileMenu>
    </NavContainer>
  );
}

