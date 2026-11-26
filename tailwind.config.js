/** @type {import('tailwindcss').Config} */
// Two-layer color system (Design Center Playbook, Step 6):
// 1. Core Colors: raw brand palettes (navy, gold, sand grayscale; status colors from Tailwind).
// 2. Role tokens: surface / text / action / border / icon / overlay, defined as CSS
//    variables in app/globals.css with a light mode (default) and a dark mode (.theme-dark).
// Components use role tokens only, so a rebrand only touches Core Colors.
const role = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#F2F5FA', 100: '#E3E9F3', 200: '#C3CFE3', 300: '#94A8C9', 400: '#607BA6',
          500: '#3E5A87', 600: '#2C456E', 700: '#213558', 800: '#172741', 900: '#0F1B2E', 950: '#08111F',
        },
        gold: {
          50: '#FBF8EE', 100: '#F5EDD2', 200: '#EBD9A3', 300: '#DFC171', 400: '#D2AA4B',
          500: '#BF9135', 600: '#A3752A', 700: '#835A25', 800: '#6C4924', 900: '#5B3D22', 950: '#342010',
        },
        sand: {
          50: '#FAF9F6', 100: '#F3F1EC', 200: '#E6E2D9', 300: '#D2CCBF', 400: '#A9A192',
          500: '#857D6E', 600: '#6A6356', 700: '#554F45', 800: '#3B3730', 900: '#24211D', 950: '#141210',
        },
        surface: { DEFAULT: role('surface'), raised: role('surface-raised'), sunken: role('surface-sunken') },
        ink: { DEFAULT: role('text-primary'), secondary: role('text-secondary'), muted: role('text-muted'), accent: role('text-accent') },
        action: { DEFAULT: role('action'), hover: role('action-hover'), text: role('action-text') },
        line: { DEFAULT: role('border'), strong: role('border-strong') },
        icon: { DEFAULT: role('icon'), accent: role('icon-accent') },
        overlay: role('overlay'),
      },
      maxWidth: { content: '1240px', prose: '680px' },
      transitionTimingFunction: { brand: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
}
