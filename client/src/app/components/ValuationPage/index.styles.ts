import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
`;

export const Section = styled.section`
  background-color: #ffffff;
  padding: 24px 0 64px 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const HeaderSection = styled.div`
  padding: 16px 0;
  width: 100%;
`;

export const EditLink = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #1f2937;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1a3d2e;
  }
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
  }
`;

export const PropertyImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #e5e7eb;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const EstimatedValueCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConfidenceRange = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 0;
`;

export const AIInsightCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MetricCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e5e7eb;
`;

export const MetricContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
`;

export const MetricTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #4b5563;
  margin: 0;
  text-align: center;
`;

export const MetricValue = styled.div`
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  color: #111827;
  
  @media (max-width: 767px) {
    font-size: 40px;
  }
`;

export const CTAButtonContainer = styled.div`
  width: 100%;
  margin-top: 8px;
`;

export const AddressDisplay = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #1a3d2e;
  margin: 0 0 16px 0;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ValueSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ValueRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
  
  /* Reduce ValueDisplay font size on mobile */
  @media (max-width: 768px) {
    div {
      font-size: 40px !important;
      line-height: 1 !important;
    }
  }
`;

export const ConfidenceBarContainer = styled.div`
  flex-shrink: 0;
  min-width: 250px;
  max-width: 400px;
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const AIInsightIcon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  color: #c4941f;
  margin-top: 2px;
  position: relative;
  
  svg {
    width: 36px;
    height: 36px;
    filter: drop-shadow(0 0 6px rgba(196, 148, 31, 0.15)) drop-shadow(0 0 12px rgba(196, 148, 31, 0.1));
    animation: glow 3s ease-in-out infinite alternate;
    position: relative;
    z-index: 1;
  }
  
  /* Additional glow layer using pseudo-element for background glow */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196, 148, 31, 0.1) 0%, rgba(196, 148, 31, 0.05) 40%, transparent 70%);
    animation: glowPulse 3s ease-in-out infinite alternate;
    z-index: 0;
    pointer-events: none;
  }
  
  @keyframes glow {
    from {
      filter: drop-shadow(0 0 6px rgba(196, 148, 31, 0.15)) drop-shadow(0 0 12px rgba(196, 148, 31, 0.1));
    }
    to {
      filter: drop-shadow(0 0 10px rgba(196, 148, 31, 0.2)) drop-shadow(0 0 18px rgba(196, 148, 31, 0.15));
    }
  }
  
  @keyframes glowPulse {
    from {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`;

export const AIInsightTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a3d2e;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #4b5563;
  text-align: center;
  margin: 32px 0 0 0;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`;

