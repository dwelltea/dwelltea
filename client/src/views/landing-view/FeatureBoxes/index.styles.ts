import styled from 'styled-components';
import { Card } from '@/ui-kit/atoms/Card';

export const Section = styled.section`
  background-color: #faf8f3;
  padding: 64px 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #374151;
`;

export const StyledCard = styled(Card)`
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: #faf8f3;
    border-color: #c4941f;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

