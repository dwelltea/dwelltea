import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Section = styled.section`
  padding: 64px 0;
  
  @media (max-width: 768px) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 40px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #1a3d2e;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  color: #1a3d2e;
  margin: 0 0 20px 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const HighlightsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  /* Ensure all cards have equal height by using grid auto-rows */
  grid-auto-rows: 1fr;
  
  /* Make sure child cards stretch to fill grid cells */
  & > * {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 24px;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetricsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Add vertical dividers between stat cards (lines of demarcation) */
  & > *:not(:last-child) {
    border-right: 1px solid #e5e7eb;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    & > *:not(:last-child) {
      border-right: none;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const TrendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CTAButtonContainer = styled.div`
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
