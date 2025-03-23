/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Rutas a tus archivos fuente
    "./index.html",         // Asegúrate de incluir el archivo HTML principal
    "./node_modules/daisyui/dist/**/*.js", // DaisyUI
    "./node_modules/@daisyui/**/*.js"
  ],  theme: {
    extend:
     {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        blue: '#1fb6ff',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Nunito Sans','Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        serif: ['Crimson Text', 'serif'], 
        
      },

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1fb6ff',
          secondary: '#ff49db',
          accent: '#ff7849',
          neutral: '#d3dce6',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#e5e7eb',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          'custom-blue': '#0e7490',
          transparent: 'transparent',
          current: 'currentColor',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'light-blue': '#b3cde0',
          'dark-blue': '#001f3f',
          'sky-blue': '#87ceeb',
          'regal-blue': '#243c5a',
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
}

