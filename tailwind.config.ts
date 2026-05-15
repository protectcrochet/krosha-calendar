import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: "#F9EEF3",
        rose: "#E9709B",
        mauve: "#A37B93",
        ink: "#302831",
      },
    },
  },
  plugins: [],
} satisfies Config;
