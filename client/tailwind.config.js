/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        "ping-half": {
          '0%': {
            transform: 'scale(.5)',
            opacity: 0
          },
          '75%, 100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        "ping-full": {
          '0%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0
          }
        }
      },
      animation: {
        "ping-half": "ping-half 0.5s ease-in",
        "ping-full": "ping-full 1s ease-in"
      }
    }
  }
};
