/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#050505",
          2: "#1F1F1F",
          3: "#2D2D2D",
          4: "#3A3A3A",
        },
        light: {
          1: "#FFFFFF",
          2: "#F4F4F4",
          3: "#E9E9E9",
          4: "#757575",
        },
        purple: {
          1: "#A445ED",
        },
        error: {
          1: "#A445ED",
        },
      },
    },
  },
  plugins: [],
};
