/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-10": "#F8F4EB",
        "dark-bg": "#0f172a",
        "text-p-gray": "#94A3B8",
        "text-hd-gray": "#E2E8F0",
        "text-bold-gray": "#64748B",
        "text-high-green": "#5EEAD4",
        "light-blue": "#02c8db"
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif']
      }
      
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  plugins: [require('@tailwindcss/typography'),
            require('@tailwindcss/forms'),
            require("daisyui") ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#31325c",
          secondary: "#31325c",
          accent: "#31325c"
        },
      },
    ],
  },
}