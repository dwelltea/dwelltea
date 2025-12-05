import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../atoms/Logo';
import { Search, User } from 'lucide-react';

export interface NavigationProps {
  className?: string;
}

const NavContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1a3d2e;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a3d2e;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <NavContainer className={className}>
      <NavContent>
        <NavLeft>
          <Logo variant="horizontal" size="medium" />
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#search">Search</NavLink>
            <NavLink href="#insights">Insights</NavLink>
            <NavLink href="#properties">My Properties</NavLink>
            <NavLink href="#about">About</NavLink>
          </NavLinks>
        </NavLeft>
        <NavRight>
          <IconButton aria-label="Search">
            <Search size={20} />
          </IconButton>
          <IconButton aria-label="User profile">
            <User size={20} />
          </IconButton>
        </NavRight>
      </NavContent>
    </NavContainer>
  );
};


