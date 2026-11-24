"use client";

import React, { useRef, useState, useCallback } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 8)
  scale?: number; // scale on hover (default: 1.02)
  glare?: boolean; // enable subtle light reflection sheen (default: true)
}

export default function Card3DTilt({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.015,
  glare = true,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Normalized coordinates (-0.5 to 0.5)
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      const rotateX = -yPct * maxTilt * 2;
      const rotateY = xPct * maxTilt * 2;

      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`
      );

      if (glare) {
        setGlareStyle({
          opacity: 0.18,
          background: `radial-gradient(circle 280px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.8), transparent 80%)`,
        });
      }
    },
    [maxTilt, scale, glare]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transition: "opacity 0.4s ease-out",
      });
    }
  }, [glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || undefined,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "transform",
      }}
      className={`relative select-none ${className}`}
    >
      {children}

      {/* Subtle Kraft Paper Light Sheen Reflection */}
      {glare && (
        <div
          aria-hidden="true"
          style={glareStyle}
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 mix-blend-overlay transition-opacity duration-200"
        />
      )}
    </div>
  );
}
