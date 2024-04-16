/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["NeuethingSans"],
    },
    extend: {
      padding: {
        clamp: 'clamp(176px, 20%, 20%)',
      }
    },
  },
  plugins: [],
}

