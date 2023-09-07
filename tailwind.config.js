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
        EasyBg:{
          100:'#D0EDF9',
          200:'#91c7de',
          300:'#23CADE'
        },
        MedBg:{
          100:'#DEFCDE',
          200:'#9fd59d',
          300:'#23DE8F'
        },
        HardBg:{
          100:'#EEF9AB',
          200:'#eefe88'
        },
        VeryHardBg:{100:'#F6D6D6'}
      },
      fontFamily:{
        icon:['Imprima'],
        body:['Anton']
      }
    },
  },
  plugins: [],
}