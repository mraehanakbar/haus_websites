/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      scale:{
        '135': '1.35',
        '120': '1.20'
      },
      boxShadow: {
        "nav-shadow":
          "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),  0 41.8px 33.4px rgba(0, 0, 0, 0.086),  0 100px 80px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "white-gray": "#F3F3F3",
        "purple-main": "#8A489C",
        "pink-main": "#CD3B8E",
        "pink-font": "#C73480",
        "pink-dropdown": "#FAFAFA",
        "pink-menu-headline": "#CE2F8C",
        "gray-button": "#F3F3FF",
        "blue-button": "#F3F3FF",
      },
      fontSize: {
        "1.5xl": "22px",
        "2.5xl": "28px",
      },
      height: {
        "menu-headline": "914px",
      },
      width: {
        88: "340px",
      },
    },
  },
  plugins: [],
};
