/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F3B144",
        secondary: "#1E3E63",
      },
    },
  },
  plugins: [],
};
