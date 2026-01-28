import styled from 'styled-components';

export const BreakdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #e5e7eb;
`;

export const BreakdownTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1a3d2e;
  margin: 0;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const BreakdownDescription = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
`;

export const ComparablePropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BreakdownButtonContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

