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
        primary: "#070D18",
        secondary: "#0E192D",
        "action-primary": "#00853A",
        "heading-color": "#F2F5FD",
        "body-secondary": "#ACAFBB",
      },
    },
  },
  plugins: [],
} satisfies Config;
