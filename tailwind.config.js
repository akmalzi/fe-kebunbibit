/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor : "#74BA10",
        hoverPrimaryColor : "#3A5A0D",
        deleteColor : "#b91c1c",
        deleteHoverColor : "#a71919",
        bgGrayColor : "#F8F9FA"
      },
      dropShadow: {
        text : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

