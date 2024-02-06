// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/forms',
    require("daisyui"),
  ],
  variants: {
    extend: {
        display: ['group-hover'],
    }
},
}