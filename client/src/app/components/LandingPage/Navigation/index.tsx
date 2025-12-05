'use client';

import React from 'react';
import { Logo } from '@/ui-library/atoms/Logo';
import { Search, User } from 'lucide-react';
import {
  NavContainer,
  NavContent,
  NavLeft,
  NavLinks,
  NavLink,
  NavRight,
  IconButton,
  LogoLink,
} from './index.styles';

interface NavigationProps {
  onSearchClick?: () => void;
  onHomeClick?: () => void;
}

export function Navigation({ onSearchClick, onHomeClick }: NavigationProps) {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick?.();
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick?.();
  };

  return (
    <NavContainer>
      <NavContent>
        <NavLeft>
          <LogoLink onClick={handleLogoClick} href="#" aria-label="Home">
            <Logo variant="horizontal" size="medium" />
          </LogoLink>
          <NavLinks>
            <NavLink href="#" onClick={handleHomeClick}>Home</NavLink>
            <NavLink href="#insights">Insights</NavLink>
            <NavLink href="#about">About</NavLink>
          </NavLinks>
        </NavLeft>
        <NavRight>
          <IconButton aria-label="Search" onClick={onSearchClick}>
            <Search size={20} />
          </IconButton>
          <IconButton aria-label="User profile">
            <User size={20} />
          </IconButton>
        </NavRight>
      </NavContent>
    </NavContainer>
  );
}

