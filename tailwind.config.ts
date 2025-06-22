import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0F9F4B",
        secondary: "#121212",
        tertiary: "#FAFAFA",
        black: "#121212",
        quinary: "#FFFFFF",
        senary: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
