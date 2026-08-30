"use client";

import React, { useState, useEffect, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

export default function AnimatedHeroLogo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  // Live drawing states
  const [offset1, setOffset1] = useState(800);
  const [offset2, setOffset2] = useState(800);
  const [brushState, setBrushState] = useState<{
    visible: boolean;
    x: number;
    y: number;
    angle: number;
    tilt: number;
    opacity: number;
  }>({
    visible: false,
    x: 50,
    y: 60,
    angle: 0,
    tilt: -35,
    opacity: 0,
  });

  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    setMounted(true);

    const path1 = path1Ref.current;
    const path2 = path2Ref.current;
    if (!path1 || !path2) return;

    const len1 = path1.getTotalLength() || 800;
    const len2 = path2.getTotalLength() || 800;

    setOffset1(len1);
    setOffset2(len2);

    let startTime: number | null = null;
    let animationFrameId: number;

    // Total choreographed timeline:
    // 0ms - 300ms: Intro pause
    // 300ms - 2500ms: Paint Frame 1 (2.2s)
    // 2500ms - 3000ms: Fluid Arc Glide from Frame 1 to Frame 2 (0.5s)
    // 3000ms - 5200ms: Paint Frame 2 (2.2s)
    // 5000ms: Typography reveal starts
    // 5200ms - 5800ms: Brush flourish & fade out

    const DURATION_F1 = 2200;
    const DURATION_GLIDE = 500;
    const DURATION_F2 = 2200;
    const TOTAL_TIME = 300 + DURATION_F1 + DURATION_GLIDE + DURATION_F2 + 600;

    // Smooth Bezier Easing Function
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    // Spark generation
    let sparkList: Spark[] = [];
    let sparkIdCounter = 0;

    const addSparksAt = (x: number, y: number) => {
      if (Math.random() > 0.45) {
        sparkList.push({
          id: ++sparkIdCounter,
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 2.2,
          vy: (Math.random() - 0.5) * 2.2 - 0.5,
          alpha: 1,
          size: Math.random() * 2.5 + 1.2,
        });
      }
    };

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      // Update sparks physics
      sparkList = sparkList
        .map((s) => ({
          ...s,
          x: s.x + s.vx,
          y: s.y + s.vy,
          alpha: s.alpha - 0.035,
        }))
        .filter((s) => s.alpha > 0);

      setSparks([...sparkList]);

      if (elapsed < 300) {
        // Initial positioning
        setBrushState({
          visible: true,
          x: 50,
          y: 60,
          angle: 0,
          tilt: -35,
          opacity: elapsed / 300,
        });
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const drawTime = elapsed - 300;

      // ─── PHASE 1: Paint Frame 1 ───
      if (drawTime <= DURATION_F1) {
        const progress = easeInOutCubic(drawTime / DURATION_F1);
        const curLen = progress * len1;
        setOffset1(len1 - curLen);

        // Get exact point & tangent angle on path
        const pt = path1.getPointAtLength(curLen);
        const nextPt = path1.getPointAtLength(Math.min(curLen + 3, len1));
        const angle = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);

        setBrushState({
          visible: true,
          x: pt.x,
          y: pt.y,
          angle: angle,
          tilt: -25 + Math.sin(drawTime * 0.008) * 12,
          opacity: 1,
        });

        addSparksAt(pt.x, pt.y);
      }
      // ─── PHASE 2: Glide Arc to Frame 2 ───
      else if (drawTime <= DURATION_F1 + DURATION_GLIDE) {
        setOffset1(0);
        const glideProg = easeOutQuad((drawTime - DURATION_F1) / DURATION_GLIDE);

        // Quadratic Bézier curve through air from (50, 60) -> (150, 140) via peak (120, 30)
        const startX = 50, startY = 60;
        const ctrlX = 120, ctrlY = 40;
        const endX = 150, endY = 140;

        const x = (1 - glideProg) * (1 - glideProg) * startX + 2 * (1 - glideProg) * glideProg * ctrlX + glideProg * glideProg * endX;
        const y = (1 - glideProg) * (1 - glideProg) * startY + 2 * (1 - glideProg) * glideProg * ctrlY + glideProg * glideProg * endY;

        setBrushState({
          visible: true,
          x,
          y,
          angle: 45,
          tilt: -45 + glideProg * 15,
          opacity: 0.9,
        });
      }
      // ─── PHASE 3: Paint Frame 2 ───
      else if (drawTime <= DURATION_F1 + DURATION_GLIDE + DURATION_F2) {
        setOffset1(0);
        const f2Time = drawTime - (DURATION_F1 + DURATION_GLIDE);
        const progress = easeInOutCubic(f2Time / DURATION_F2);
        const curLen = progress * len2;
        setOffset2(len2 - curLen);

        const pt = path2.getPointAtLength(curLen);
        const nextPt = path2.getPointAtLength(Math.min(curLen + 3, len2));
        const angle = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);

        setBrushState({
          visible: true,
          x: pt.x,
          y: pt.y,
          angle: angle,
          tilt: -25 + Math.sin(f2Time * 0.008) * 12,
          opacity: 1,
        });

        addSparksAt(pt.x, pt.y);

        if (progress > 0.85) {
          setTextVisible(true);
        }
      }
      // ─── PHASE 4: Brush Flourish & Fade Out ───
      else {
        setOffset1(0);
        setOffset2(0);
        setTextVisible(true);

        const fadeTime = drawTime - (DURATION_F1 + DURATION_GLIDE + DURATION_F2);
        const fadeProg = Math.min(1, fadeTime / 600);

        setBrushState((prev) => ({
          ...prev,
          x: 150 + fadeProg * 35,
          y: 140 - fadeProg * 30,
          tilt: -60,
          opacity: Math.max(0, 1 - fadeProg),
        }));

        if (fadeProg >= 1) {
          setIsDone(true);
          return; // Stop animation loop completely to save 100% CPU
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 14, y: y * 14 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[580px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-4 select-none cursor-pointer group"
      style={{ perspective: 1400 }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 bg-radial from-[#dfc17b]/18 via-purple-950/25 to-transparent blur-3xl rounded-full pointer-events-none transform -translate-y-2 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/15 via-amber-900/10 to-purple-900/15 blur-2xl pointer-events-none" />

      {/* 3D Parallax Platform */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 840 420"
          className="w-full h-full drop-shadow-[0_12px_45px_rgba(223,193,123,0.2)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich Liquid Gold Gradients */}
            <linearGradient id="liquidGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff6d6" />
              <stop offset="25%" stopColor="#dfc17b" />
              <stop offset="65%" stopColor="#c5a867" />
              <stop offset="100%" stopColor="#9a7b38" />
            </linearGradient>

            <linearGradient id="liquidGold2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c5a867" />
              <stop offset="50%" stopColor="#fff8e1" />
              <stop offset="100%" stopColor="#dfc17b" />
            </linearGradient>

            {/* Brush Gold Metal Gradients */}
            <linearGradient id="brushShaft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2c2d33" />
              <stop offset="40%" stopColor="#4b4d56" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>

            <linearGradient id="brushGoldFerrule" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3cb" />
              <stop offset="50%" stopColor="#dfc17b" />
              <stop offset="100%" stopColor="#9a7b38" />
            </linearGradient>

            {/* Cinematic Glow Filters */}
            <filter id="tracerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ═════════════════════════════════════════════
              HIDDEN GEOMETRIC REFERENCE PATHS
              ═════════════════════════════════════════════ */}
          <path
            ref={path1Ref}
            d="M 50 60 L 250 60 L 250 260 L 50 260 Z"
            stroke="transparent"
            fill="none"
          />
          <path
            ref={path2Ref}
            d="M 150 140 L 350 140 L 350 340 L 150 340 Z"
            stroke="transparent"
            fill="none"
          />

          {/* ═════════════════════════════════════════════
              DRAWN FRAME 1: Top-Left (Gold Stroke)
              ═════════════════════════════════════════════ */}
          <path
            d="M 50 60 L 250 60 L 250 260 L 50 260 Z"
            stroke="url(#liquidGold1)"
            strokeWidth="7"
            strokeLinejoin="miter"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: offset1,
            }}
          />

          {/* ═════════════════════════════════════════════
              DRAWN FRAME 2: Bottom-Right Overlap
              ═════════════════════════════════════════════ */}
          <path
            d="M 150 140 L 350 140 L 350 340 L 150 340 Z"
            stroke="url(#liquidGold2)"
            strokeWidth="7"
            strokeLinejoin="miter"
            filter="url(#softGlow)"
            style={{
              strokeDasharray: 800,
              strokeDashoffset: offset2,
            }}
          />

          {/* Frame Intersection Accent Flash */}
          {textVisible && (
            <g className="animate-fade-in" style={{ animationDuration: "1s" }}>
              <line x1="150" y1="140" x2="250" y2="140" stroke="#fff9e6" strokeWidth="7" />
              <line x1="150" y1="140" x2="150" y2="260" stroke="#fff9e6" strokeWidth="7" />
            </g>
          )}

          {/* ═════════════════════════════════════════════
              ACTIVE PARTICLES & SPARK TRAILS
              ═════════════════════════════════════════════ */}
          {sparks.map((s) => (
            <circle
              key={s.id}
              cx={s.x}
              cy={s.y}
              r={s.size}
              fill="#fff6d6"
              opacity={s.alpha}
            />
          ))}

          {/* ═════════════════════════════════════════════
              DYNAMIC ARTIST BRUSH / STYLUS (PINNED EXACTLY TO TIP)
              ═════════════════════════════════════════════ */}
          {!isDone && brushState.visible && (
            <g
              transform={`translate(${brushState.x}, ${brushState.y})`}
              style={{
                opacity: brushState.opacity,
                transition: "opacity 0.2s ease-out",
              }}
            >
              {/* Active High-Energy Laser Paint Tip */}
              <circle cx="0" cy="0" r="16" fill="#dfc17b" opacity="0.45" filter="url(#tracerGlow)" />
              <circle cx="0" cy="0" r="6" fill="#ffffff" />
              <circle cx="0" cy="0" r="2.5" fill="#dfc17b" />

              {/* Realistic Artist Paintbrush Body with Dynamics */}
              <g transform={`rotate(${brushState.tilt}) translate(-4, -68)`}>
                {/* Slender Handle */}
                <path
                  d="M 1 -10 L 7 -10 L 9 -75 C 9 -78, -1 -78, -1 -75 Z"
                  fill="url(#brushShaft)"
                  stroke="#52525b"
                  strokeWidth="0.75"
                />
                {/* Polished Champagne-Gold Ferrule Ring */}
                <rect x="-1" y="-10" width="10" height="18" fill="url(#brushGoldFerrule)" rx="1.5" />
                <line x1="-1" y1="-2" x2="9" y2="-2" stroke="#9a7b38" strokeWidth="0.8" />

                {/* Fine Kolinsky Sable Bristles */}
                <path
                  d="M 0 8 C 1 24, 2 38, 4 48 C 6 38, 7 24, 8 8 Z"
                  fill="url(#liquidGold1)"
                />
                {/* Glowing Wet Gold Paint Loading at Tip */}
                <circle cx="4" cy="48" r="3.5" fill="#ffffff" filter="url(#softGlow)" />
              </g>
            </g>
          )}

          {/* ═════════════════════════════════════════════
              TYPOGRAPHY: TWOFRAME STUDIO VISUAL PRODUCTION
              ═════════════════════════════════════════════ */}
          <g
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0px)" : "translateX(25px)",
              transition: "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* TWOFRAME (Bold, Crisp White) */}
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

            {/* STUDIO (Light, Cinematic Tracking) */}
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

            {/* VISUAL PRODUCTION (Gold Editorial Subtitle) */}
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

          {/* Subtle Ambient Sparkle Stars on Finish */}
          {textVisible && (
            <>
              <circle cx="250" cy="60" r="3" fill="#fff3cb" className="animate-pulse" />
              <circle cx="350" cy="340" r="3" fill="#dfc17b" className="animate-pulse" />
            </>
          )}
        </svg>
      </div>

      {/* Ground Light Mirroring / Shadow */}
      <div className="absolute -bottom-6 inset-x-12 h-10 bg-gradient-to-t from-transparent via-[#dfc17b]/12 to-transparent blur-xl rounded-full pointer-events-none" />
    </div>
  );
}
