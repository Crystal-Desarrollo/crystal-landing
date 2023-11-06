/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    extend: {
      colors: {
        primary: "#4912C5",
        "font-light": "#ffffff99",
      },
      backgroundImage: {
        gradient: "linear-gradient(270deg, #4912C5 0%, #543C8B 127.61%)",
      },
      borderColor: {
        gradient: "transparent transparent transparent transparent",
      },
    },
  },
  plugins: [],
};
