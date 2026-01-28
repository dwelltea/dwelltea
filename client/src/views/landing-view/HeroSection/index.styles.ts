import styled from 'styled-components';

export const Section = styled.section`
  background-color: #faf8f3;
  padding: 64px 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1;
  color: #1a3d2e;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
  
  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #1f2937;
  max-width: 600px;
`;

