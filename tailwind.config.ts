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
        primary: "#F2C299", // Peach/Light Orange
        secondary: "#D8CFC4", // Light Beige
        terracotta: "#AC5E49", // Terracotta
        charcoal: "#403B38", // Dark Charcoal
        "off-white": "#F5F1EC", // Primary Background
      },
      fontFamily: {
        sans: ["Noto Kufi Arabic", "sans-serif"],
        display: ["Noto Kufi Arabic", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;