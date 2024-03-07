/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkPink: "#733657",
        pink: "#D9329E",
      },
    },
  },
  plugins: [],
};
