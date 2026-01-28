import React from 'react';
import styled from 'styled-components';

export interface HighlightItemProps {
  icon: React.ReactNode; // Icon from lucide-react (GraduationCap, Tree, Home, Building, TrendingUp, etc.)
  children: React.ReactNode; // Text content - can be string or complex JSX (supports multiple lines)
  className?: string;
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2px;
  
  & > * {
    color: #c4941f;
    width: 28px;
    height: 28px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  color: #374151;
  font-size: 18px;
  line-height: 1.5;
`;

export const HighlightItem: React.FC<HighlightItemProps> = ({
  icon,
  children,
  className = '',
}) => {
  return (
    <Container className={className}>
      <IconWrapper>{icon}</IconWrapper>
      <TextContent>{children}</TextContent>
    </Container>
  );
};
