import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080a",
        surface: {
          DEFAULT: "#0f0f13",
          hover: "#17171d",
          elevated: "#1c1c24",
          border: "rgba(255, 255, 255, 0.08)",
        },
        studio: {
          purple: {
            DEFAULT: "#8b5cf6",
            light: "#a78bfa",
            dark: "#6d28d9",
            glow: "rgba(139, 92, 246, 0.15)",
          },
          charcoal: {
            900: "#08080a",
            800: "#0e0e12",
            700: "#15151b",
            600: "#22222a",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        tighter: "-0.04em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
