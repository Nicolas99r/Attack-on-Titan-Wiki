/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        gray1: '#212121',
        gray2: '#2C2C2C',
        gray3: '#818181',
        gray4: '#9A9A9A',
        white1: 'rgba(255,255,255,0.8)',
        white2: 'rgba(255,255,255,0.3)',
        white3: 'rgba(255,255,255,0.15)',
        white4: 'rgba(255,255,255,0.1)',
        black1: 'rgba(0,0,0,0.8)',
        netflixRed: '#E50913',
        netflixGreen: '#45D468'
      },

      fontFamily: {
        'inter-bold': ['Inter_28pt-Bold', 'sans-serif'],
        'inter-regular': ['Inter_28pt-Regular', 'sans-serif'],
        'inter-semibold': ['Inter_28pt-SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}