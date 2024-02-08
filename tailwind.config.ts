import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    },
  },
  plugins: [],
};
export default config;
