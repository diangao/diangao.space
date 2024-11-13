import type { Config } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wabi: "rgb(var(--bg-wabi) / <alpha-value>)",
        sabi: "rgb(var(--bg-sabi) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

export default config;
