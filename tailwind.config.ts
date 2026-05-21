import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        glass: "var(--glass)",
        border: "var(--border)",
        green: {
          50: "var(--green-50)",
          100: "var(--green-100)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          900: "var(--green-900)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair-display)", "serif"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        hero: "var(--text-hero)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        green: "var(--shadow-green)",
      },
    },
  },
  plugins: [],
};
export default config;
