'use client';

import React, { useRef, MouseEvent } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Card3DProps {
  className?: string;
  gradientFrom: string;
  gradientTo: string;
  iconBgFrom: string;
  iconBgTo: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
}

export function Card3D({
  className = '',
  gradientFrom,
  gradientTo,
  iconBgFrom,
  iconBgTo,
  icon,
  title,
  description,
  content,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.05)`;

    // Update glow position
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${gradientFrom}40, transparent)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card className={`relative border-2 overflow-hidden backdrop-blur-sm bg-white/90 shadow-xl ${className}`}>
        {/* Gradient overlay */}
        <div
          ref={glowRef}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}10, transparent, ${gradientTo}10)`,
          }}
        ></div>

        <CardHeader className="relative z-10">
          <div
            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
            style={{
              background: `linear-gradient(135deg, ${iconBgFrom}, ${iconBgTo})`,
            }}
          >
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-gray-600">{content}</p>
        </CardContent>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent"></div>
      </Card>
    </div>
  );
}
