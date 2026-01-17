import styled from 'styled-components';

export const NavContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
  position: relative;
`;

export const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  min-width: 0;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #1f2937;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1a3d2e;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const IconButton = styled.button`
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

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #1a3d2e;
  padding: 8px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    opacity: 0.7;
  }
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const MobileMenuContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  max-width: 85vw;
  height: 100%;
  background-color: #fefcf9;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  padding: 12px;
  overflow-y: auto;
`;

export const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 48px;
`;

export const MobileNavLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #1f2937;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: block;
  
  &:hover {
    background-color: #f3f4f6;
    color: #1a3d2e;
  }
  
  &:active {
    background-color: #e5e7eb;
  }
`;

export const MobileNavLinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MobileNavLinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`;
