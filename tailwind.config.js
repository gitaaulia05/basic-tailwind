/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./belajarT.html'],
  darkMode: 'class',
          theme: {
            extend: {
              colors: {
                clifford: '#da373d',
              } ,
               fontFamily: {
                    inter : ['Inter'],
               },
               animation:{
                'spin-slow': 'spin 4s linear infinite', 
                'goyang': 'wiggle 1s ease-in-out infinite',
               },
               keyframes: {
                wiggle: {
                 '0%, 100%' :{ transform: 'rotate(-3deg)'}, 
                 '50%': { transform: 'rotate(3deg)'},
                }
               },
            }
          },  
  plugins: [],
}

