/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4912C5',
        'font-light': '#ffffff99',
      },
      backgroundImage: {
        gradient: 'linear-gradient(270deg, #4912C5 0%, #543C8B 127.61%)',
      },
      borderColor: {
        gradient: 'transparent transparent transparent transparent',
      },
    },
  },
  plugins: [animations, addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
