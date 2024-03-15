/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pacifico : ["pacifico"],
      },
      backgroundColor: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#7477FF",
      },
      textColor: {
        accent: "#7477FF",
      },
    },
  },
  plugins: [],
};
