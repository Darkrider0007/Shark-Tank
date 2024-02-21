import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        bg_dark_primary: "#0c0c0c",
        bg_dark_secondary: "#181717",
        bg_dark_placeholder: "#0c090a",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        poppins: ["var(--font-poppins)"],
        kanit: ["var(--font-kanit)"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
