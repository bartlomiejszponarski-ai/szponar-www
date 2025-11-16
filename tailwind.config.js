/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        cyber: ["'Syncopate'", "sans-serif"],
      },
      colors: {
        'neon-cyan': '#00f3ff',
        'neon-green': '#0aff00',
        'bg-dark': '#050505',
        'panel-bg': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
