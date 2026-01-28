import React from 'react';
import styled from 'styled-components';
import { Card } from '../../atoms/Card';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconWrapper = styled.div`
  color: #c4941f;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #111827;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #374151;
  margin: 0;
`;

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <Card className={className}>
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
};

