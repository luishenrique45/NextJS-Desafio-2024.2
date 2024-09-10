import type { Config } from "tailwindcss";
import Image from "next/image";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      screens:{
        'md':'768px',
        'lg':'1280px',
        'xl':'1920px',
        '2xl':'2560px',
        '3xl':'3440px',
      },
      colors:{
        azul:{
          principal:"#3771C8"
        },
        cinza:{
       principal:"#BFBFBF"
                  
        }
      },
      margin :{
        'm-10p':'10%',
        'm-25p':'25%',
        'm-50p':'50%'
      }
    
    },
  },
  plugins: [],
};
export default config;
