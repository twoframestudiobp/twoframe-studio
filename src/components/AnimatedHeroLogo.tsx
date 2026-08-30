"use client";

import React, { useState, useEffect } from "react";

export default function AnimatedHeroLogo() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-4 sm:p-8 select-none"
      style={{ perspective: 1000 }}
    >
      {/* Ambient Gold & Violet Background Glow */}
      <div className="absolute inset-0 bg-radial from-[#dfc17b]/15 via-purple-950/20 to-transparent blur-3xl rounded-full pointer-events-none transform -translate-y-2" />
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/10 via-transparent to-amber-900/10 blur-2xl pointer-events-none" />

      {/* 3D Interactive Container */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full drop-shadow-[0_10px_35px_rgba(223,193,123,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold Frame Gradient */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3e5ab" />
              <stop offset="30%" stopColor="#dfc17b" />
              <stop offset="70%" stopColor="#c5a867" />
              <stop offset="100%" stopColor="#9a7b38" />
            </linearGradient>

            {/* Glowing Accent Gradient */}
            <linearGradient id="goldAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c5a867" />
              <stop offset="50%" stopColor="#fff2c8" />
              <stop offset="100%" stopColor="#dfc17b" />
            </linearGradient>

            {/* Soft Ambient Light Glow Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Typography Gradient */}
            <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f4f4f5" />
            </linearGradient>
          </defs>

          {/* ═════════════════════════════════════════════
              FRAME 1: Top-Left Frame (Animates first)
              ═════════════════════════════════════════════ */}
          <rect
            x="50"
            y="60"
            width="200"
            height="200"
            stroke="url(#goldGradient)"
            strokeWidth="7"
            strokeLinejoin="miter"
            className="animate-draw-frame-1"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: mounted ? 0 : 800,
              transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          />

          {/* ═════════════════════════════════════════════
              FRAME 2: Bottom-Right Overlapping Frame (Animates second)
              ═════════════════════════════════════════════ */}
          <rect
            x="150"
            y="140"
            width="200"
            height="200"
            stroke="url(#goldAccent)"
            strokeWidth="7"
            strokeLinejoin="miter"
            filter="url(#glow)"
            className="animate-draw-frame-2"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: mounted ? 0 : 800,
              transition: "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
            }}
          />

          {/* Overlapping Intersection Accent Highlight */}
          <line
            x1="150"
            y1="140"
            x2="250"
            y2="140"
            stroke="#fff4d0"
            strokeWidth="7"
            strokeLinecap="square"
            style={{
              opacity: mounted ? 0.9 : 0,
              transition: "opacity 1s ease-out 1.8s",
            }}
          />
          <line
            x1="150"
            y1="140"
            x2="150"
            y2="260"
            stroke="#fff4d0"
            strokeWidth="7"
            strokeLinecap="square"
            style={{
              opacity: mounted ? 0.9 : 0,
              transition: "opacity 1s ease-out 1.8s",
            }}
          />

          {/* ═════════════════════════════════════════════
              TYPOGRAPHY: TWOFRAME STUDIO VISUAL PRODUCTION
              ═════════════════════════════════════════════ */}
          <g
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0px)" : "translateX(25px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
            }}
          >
            {/* TWOFRAME (Bold, High Contrast) */}
            <text
              x="395"
              y="145"
              fill="url(#textGrad)"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="3"
            >
              TWOFRAME
            </text>

            {/* STUDIO (Light, Large Tracking) */}
            <text
              x="398"
              y="235"
              fill="#fafafa"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="62"
              fontWeight="300"
              letterSpacing="10"
            >
              STUDIO
            </text>

            {/* VISUAL PRODUCTION (Understated Editorial Subtitle) */}
            <text
              x="402"
              y="285"
              fill="#c5a867"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="16"
              fontWeight="600"
              letterSpacing="9"
            >
              VISUAL PRODUCTION
            </text>
          </g>

          {/* Subtle Ambient Golden Sparks */}
          <circle
            cx="250"
            cy="60"
            r="3"
            fill="#fff3cb"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease-out 2s",
            }}
          />
          <circle
            cx="350"
            cy="340"
            r="3"
            fill="#dfc17b"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.6s ease-out 2.2s",
            }}
          />
        </svg>
      </div>

      {/* Subtle Bottom Reflection / Shadow */}
      <div className="absolute -bottom-6 inset-x-12 h-8 bg-gradient-to-t from-transparent via-[#dfc17b]/10 to-transparent blur-lg rounded-full" />
    </div>
  );
}
