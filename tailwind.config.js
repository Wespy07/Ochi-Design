/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: '1171px',
        'max-lg': { 'max': '1170px' }, 
        'max-md2': { 'max': '1036px' }, 
        'max-md': { 'max': '767px' },  
        'max-sm': { 'max': '639px' },  
        'max-xsm': { 'max': '450px' },  
      },
      fontFamily: {
        grotesk: ['Test_Founders_Grotesk_X-Cond_Sm_Semi_Bold', 'Poppins'],
        grotesk2: ['Founders Grotesk', 'Poppins'],
        grotesk3: ['Founders Grotesk X', 'Poppins'],
        neue: ['Neue Montreal Regular', 'Poppins'],
        neue2: ['Bebas Neue Regular', 'Poppins'],
      },
    },
  },
  plugins: [],
}