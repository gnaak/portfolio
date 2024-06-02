import type { Config } from "tailwindcss";

const DETECTION_BAR_SIZE = [
  [8, 48, 16, 72, 24, 8],
  [8, 24, 48, 32, 48, 8],
  [8, 40, 12, 24, 16, 8],
  [8, 32, 64, 32, 8, 8],
  [8, 72, 32, 72, 68, 8],
  [8, 64, 20, 40, 48, 8],
  [8, 28, 36, 16, 20, 8],
  [8, 48, 12, 32, 24, 8],
  [8, 24, 48, 28, 52, 8],
];

const DetectionBarKeyFrames = DETECTION_BAR_SIZE.map((bar, index) => {
  return {
    ["dv" + index]: {
      "20%": { height: `${bar[1]}px` },
      "40%": { height: `${bar[2]}px` },
      "60%": { height: `${bar[3]}px` },
      "80%": { height: `${bar[4]}px` },
    },
  };
});

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "3/4": "3/4",
        "4/3": "4/3",
        "3/5": "3/5",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        wiggle: {
          "20%": { backgroundImage: 'url("/images/wiggle2.png")' },
          "40%": { backgroundImage: 'url("/images/wiggle3.png")' },
          "60%": { backgroundImage: 'url("/images/wiggle4.png")' },
          "80%": { backgroundImage: 'url("/images/wiggle5.png")' },
        },
        ...DetectionBarKeyFrames[0],
        ...DetectionBarKeyFrames[1],
        ...DetectionBarKeyFrames[2],
        ...DetectionBarKeyFrames[3],
        ...DetectionBarKeyFrames[4],
        ...DetectionBarKeyFrames[5],
        ...DetectionBarKeyFrames[6],
        ...DetectionBarKeyFrames[7],
        ...DetectionBarKeyFrames[8],
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.5s forwards",
        fadeOutLeft: "fadeOutLeft 0.5s forwards",
        fadeIn: "fadeIn 0.5s forwards",
        fadeOut: "fadeOut 0.5s forwards",
        wiggle: "wiggle 1.8s ease infinite",
        dv0: "dv0 1.8s ease-out infinite",
        dv1: "dv1 1.8s ease-out infinite",
        dv2: "dv2 1.8s ease-out infinite",
        dv3: "dv3 1.8s ease-out infinite",
        dv4: "dv4 1.8s ease-out infinite",
        dv5: "dv5 1.8s ease-out infinite",
        dv6: "dv6 1.8s ease-out infinite",
        dv7: "dv7 1.8s ease-out infinite",
        dv8: "dv8 1.8s ease-out infinite",
        scorebox: "scorebox 1s ease-in-out",
        moveleft: "moveleft 1s ease-in-out",
        movetop: "movetop 1s ease-in-out",
        movebottom: "movebottom 1.5s ease-in-out",
        blink: "blink 2s ease-in-out",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
