import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#E8DCC8",
        water: "#4FA8C6",
        dirt: "#8B6F4E",
        foam: "#F7F9FB",
        gold: "#D4A843",
        rarity: {
          junk: "#94A3B8",
          common: "#8B6F4E",
          uncommon: "#22C55E",
          rare: "#3B82F6",
          epic: "#A855F7",
          legendary: "#D4A843",
        },
        status: {
          keep: "#22C55E",
          sell: "#EF4444",
        },
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "var(--font-inter)", "sans-serif"],
        body: ["Inter", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
