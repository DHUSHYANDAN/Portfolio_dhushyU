/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm1:'450px',
        sm2: '341px',
        lg890: '890px',
        sm385:'385px',
         
      },
    },
  },
  plugins: [],
}
