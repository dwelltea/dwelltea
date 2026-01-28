'use client';

import React from 'react';
import { Card } from '../../atoms/Card';
import { DollarSign, Brain, MapPin, Home, User, Cog, Target } from 'lucide-react';

export interface FeatureBoxesProps {
  className?: string;
}

export function FeatureBoxes({ className = '' }: FeatureBoxesProps) {
  const features = [
    {
      icon: (
        <div className="relative">
          <Home size={40} className="text-gold-600" />
          <DollarSign size={20} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gold-600" />
        </div>
      ),
      title: 'Accurate Valuations',
      description: 'Instant estimates based on real-time data.',
    },
    {
      icon: (
        <div className="relative">
          <User size={40} className="text-gold-600" />
          <Cog size={20} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gold-600" />
        </div>
      ),
      title: 'AI-Powered Insights',
      description: 'Understand factors influencing your home\'s worth.',
    },
    {
      icon: (
        <div className="relative">
          <MapPin size={40} className="text-gold-600" />
          <Target size={20} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gold-600" />
        </div>
      ),
      title: 'Neighbourhood Intelligence',
      description: 'Key information on what\'s happening nearby.',
    },
  ];

  return (
    <section className={`bg-cream-100 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="default" className="border border-gray-200 bg-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-16 h-16">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

