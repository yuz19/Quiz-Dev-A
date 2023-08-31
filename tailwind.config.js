/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Pblue:'#00A0E3',
        Pblack:'#333333',
        EasyBg:'#D0EDF9',
        MedBg:'#DEFCDE',
        HardBg:'#EEF9AB',
        VeryHardBg:'#F6D6D6'
      },
      fontFamily:{
        icon:['Imprima'],
        body:['Anton']
      }
    },
  },
  plugins: [],
}