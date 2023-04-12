/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9a6de8",
        
"secondary": "#00665b",
        
"accent": "#9af9f5",
        
"neutral": "#2F2730",
        
"base-100": "#fff",
        
"info": "#3C57E2",
        
"success": "#30C078",
        
"warning": "#906E09",
        
"error": "#F75055",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

