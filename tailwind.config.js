/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pacifico : ["pacifico"],
      },
      colors: {
        "primaryDark": "#0F172A",
        "secondaryDark": "#1E293B",
        "accent": "#7477FF",
        "primaryLight": "#F1F5F9",
        "secondaryLight": "#E2E8F0"
      },
      
    },
  },
  plugins: [],
};
