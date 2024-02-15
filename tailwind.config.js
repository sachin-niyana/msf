/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "4xxl": "40px",
      "5xl": "48px",
      "6xl": "60px",
      "6xxl": "64px",
      "7xl": "72px",
      "7xxl": "82px",
      "8xl": "96pxx",
      "8xxl": "118px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/images/background/hero-bg.png')",
      },
      colors: {
        mirage: "#111822",
        "tia-maria": "#cd520f",
        shark: "#19191b",
        "hawaiian-tan": "#954115",
        bombay: "#b8babd",
        zircon: "#f9fbff",
        silver: "#c6c6c6",
        "red-damask": "#de6f38",
      },
      boxShadow: {
        grayShadow: "0px 0px 10px 2px gray",
      },
    },
  },
  plugins: [],
};
