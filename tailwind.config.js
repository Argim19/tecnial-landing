/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        /* === COLORES DE MARCA === */
        primary: {
          DEFAULT: "#04BCD4",   // principal
          hover: "#03A9BE",
          dark: "#028A9E",
          soft: "#D9F4F8",
        },

        secondary: {
          DEFAULT: "#3C3C34",
          dark: "#2A2A24",
          soft: "#5A5A52",
          light: "#E6E6E1",
        },

        /* === NEUTROS === */
        base: {
          white: "#FFFFFF",
          soft: "#F8F9FA",
        },

        gray: {
          light: "#E5E7EB",
          DEFAULT: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};
