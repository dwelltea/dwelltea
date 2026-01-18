import React from 'react';
import styled from 'styled-components';
import { Lightbulb } from 'lucide-react';
import { AnimatedText } from '../../../app/components/LandingPage/HeroSection/AnimatedText';

export interface AIInsightCardProps {
  insightText: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const Container = styled.div`
  background-color: #f0fdf4;
  border-radius: 12px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  
  @media (min-width: 768px) {
    padding: 32px 0 0 24px;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const AIInsightIcon = styled.div`
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

const AIInsightTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a3d2e;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const InsightText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #374151;
  margin: 0;
`;

const RightColumn = styled.div`
  flex: 1;
  
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 0px 8px 8px 0px;
  overflow: hidden;
  background-color: #e5e7eb;
  
  @media (min-width: 768px) {
    aspect-ratio: 1 / 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AIInsightCard: React.FC<AIInsightCardProps> = ({
  insightText,
  imageSrc,
  imageAlt,
  className = '',
}) => {
  return (
    <Container className={className}>
      <ContentWrapper>
        {/* Left Column - Content */}
        <LeftColumn>
          <HeaderRow>
            <AIInsightIcon>
              <Lightbulb size={28} />
            </AIInsightIcon>
            <div style={{ flex: 1 }}>
              <AIInsightTitle>AI Insight</AIInsightTitle>
              <InsightText>
                <AnimatedText text={insightText} delay={30} startDelay={300} />
              </InsightText>
            </div>
          </HeaderRow>
        </LeftColumn>

        {/* Right Column - Image */}
        <RightColumn>
          <ImageContainer>
            <img src={imageSrc} alt={imageAlt} />
          </ImageContainer>
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
};
