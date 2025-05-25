/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Extra small devices
        sm: "600px", // Small tablets and large phones
        md: "768px", // Tablets
        lg: "1024px", // Small laptops
        xl: "1200px", // Laptops
        "2xl": "1366px", // Desktops
        "3xl": "1440px", // Large desktops
        "4xl": "1600px", // Extra large screens
        "5xl": "1720px", // Wide screens
        "6xl": "1920px", // Ultra wide screens
      },
    },
  },
  plugins: [],
};
