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
    setMousePos({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-4 sm:p-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Gold & Violet Glow */}
      <div className="absolute inset-0 bg-radial from-[#dfc17b]/15 via-purple-950/20 to-transparent blur-3xl rounded-full pointer-events-none transform -translate-y-2" />
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/10 via-amber-900/5 to-purple-900/10 blur-2xl pointer-events-none" />

      {/* 3D Interactive Container */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 820 420"
          className="w-full h-full drop-shadow-[0_12px_40px_rgba(223,193,123,0.18)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold Frame Gradient */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7eec8" />
              <stop offset="25%" stopColor="#dfc17b" />
              <stop offset="70%" stopColor="#c5a867" />
              <stop offset="100%" stopColor="#9a7b38" />
            </linearGradient>

            {/* Glowing Frame 2 Gradient */}
            <linearGradient id="goldAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c5a867" />
              <stop offset="50%" stopColor="#fff3cb" />
              <stop offset="100%" stopColor="#dfc17b" />
            </linearGradient>

            {/* Brush Gold Trim Gradient */}
            <linearGradient id="brushBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2c2d30" />
              <stop offset="50%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
            <linearGradient id="brushGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dfc17b" />
              <stop offset="100%" stopColor="#f3e5ab" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="brushGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ═════════════════════════════════════════════
              PATH 1: Frame 1 (Top-Left)
              ═════════════════════════════════════════════ */}
          <path
            id="frame1Path"
            d="M 50 60 H 250 V 260 H 50 Z"
            stroke="url(#goldGradient)"
            strokeWidth="7"
            strokeLinejoin="miter"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: mounted ? 0 : 800,
              transition: "stroke-dashoffset 2.6s cubic-bezier(0.25, 1, 0.35, 1) 0.3s",
            }}
          />

          {/* ═════════════════════════════════════════════
              PATH 2: Frame 2 (Bottom-Right Overlap)
              ═════════════════════════════════════════════ */}
          <path
            id="frame2Path"
            d="M 150 140 H 350 V 340 H 150 Z"
            stroke="url(#goldAccent)"
            strokeWidth="7"
            strokeLinejoin="miter"
            filter="url(#softGlow)"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: mounted ? 0 : 800,
              transition: "stroke-dashoffset 2.6s cubic-bezier(0.25, 1, 0.35, 1) 2.2s",
            }}
          />

          {/* ═════════════════════════════════════════════
              ANIMATED ARTIST BRUSH / STYLUS
              ═════════════════════════════════════════════ */}
          <g className={mounted ? "animate-brush-paint" : "opacity-0"}>
            {/* Ambient Brush Glow at Tip */}
            <circle cx="0" cy="0" r="14" fill="#dfc17b" opacity="0.35" filter="url(#brushGlow)" />
            <circle cx="0" cy="0" r="5" fill="#fff9e6" />

            {/* Stylized Angled Artist Brush */}
            <g transform="rotate(-40) translate(-3, -48)">
              {/* Brush Handle Body */}
              <path
                d="M 0 0 L 6 0 L 8 -36 L -2 -36 Z"
                fill="url(#brushBodyGrad)"
                stroke="#3f3f46"
                strokeWidth="0.8"
              />
              {/* Ferrule / Gold Ring */}
              <rect x="-2" y="-12" width="10" height="7" fill="url(#brushGoldTrim)" rx="1" />
              {/* Brush Fine Bristles */}
              <path
                d="M 0 0 C 1 10, 2 16, 3 20 C 4 16, 5 10, 6 0 Z"
                fill="url(#goldGradient)"
              />
              {/* Glowing Wet Gold Paint Tip */}
              <circle cx="3" cy="20" r="2.5" fill="#ffffff" />
            </g>
          </g>

          {/* ═════════════════════════════════════════════
              TYPOGRAPHY: TWOFRAME STUDIO VISUAL PRODUCTION
              ═════════════════════════════════════════════ */}
          <g
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0px)" : "translateX(25px)",
              transition: "opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 3.8s, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 3.8s",
            }}
          >
            {/* TWOFRAME */}
            <text
              x="395"
              y="145"
              fill="#ffffff"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="3"
            >
              TWOFRAME
            </text>

            {/* STUDIO */}
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

            {/* VISUAL PRODUCTION */}
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

          {/* Sparkles upon completion */}
          <circle
            cx="250"
            cy="60"
            r="3"
            fill="#fff3cb"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease-out 4.6s",
            }}
          />
          <circle
            cx="350"
            cy="340"
            r="3"
            fill="#dfc17b"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease-out 4.8s",
            }}
          />
        </svg>
      </div>

      {/* Embedded Hardware-Accelerated Brush Motion Keyframes */}
      <style jsx>{`
        @keyframes brushMotion {
          /* Start at Frame 1 origin (50, 60) */
          0% {
            transform: translate(50px, 60px);
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          /* Frame 1 Top side -> Right (250, 60) */
          12% {
            transform: translate(250px, 60px);
          }
          /* Frame 1 Right side -> Bottom (250, 260) */
          24% {
            transform: translate(250px, 260px);
          }
          /* Frame 1 Bottom side -> Left (50, 260) */
          36% {
            transform: translate(50px, 260px);
          }
          /* Frame 1 Left side -> Top (50, 60) */
          46% {
            transform: translate(50px, 60px);
          }
          /* Lift and glide brush to Frame 2 origin (150, 140) */
          52% {
            transform: translate(150px, 140px);
            opacity: 0.85;
          }
          /* Frame 2 Top side -> Right (350, 140) */
          63% {
            transform: translate(350px, 140px);
          }
          /* Frame 2 Right side -> Bottom (350, 340) */
          75% {
            transform: translate(350px, 340px);
          }
          /* Frame 2 Bottom side -> Left (150, 340) */
          87% {
            transform: translate(150px, 340px);
          }
          /* Frame 2 Left side -> Top (150, 140) */
          96% {
            transform: translate(150px, 140px);
            opacity: 1;
          }
          /* Graceful flourish & fade out */
          100% {
            transform: translate(180px, 110px) scale(0.9);
            opacity: 0;
          }
        }

        .animate-brush-paint {
          animation: brushMotion 5.2s cubic-bezier(0.25, 1, 0.35, 1) forwards 0.3s;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-brush-paint {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
