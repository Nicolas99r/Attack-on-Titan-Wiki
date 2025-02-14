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
      fontFamily: {
        'inter-bold': ['Inter_28pt-Bold', 'sans-serif'],
        'inter-regular': ['Inter_28pt-Regular', 'sans-serif'],
        'inter-semibold': ['Inter_28pt-SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}