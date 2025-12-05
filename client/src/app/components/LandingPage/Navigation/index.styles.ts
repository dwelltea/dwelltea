import styled from 'styled-components';

export const NavContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
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

