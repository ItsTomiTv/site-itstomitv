/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        panel: '#111111',
        accent: '#ff1a1a',
        accentStrong: '#d10000',
        text: '#f5f5f5',
        muted: '#a7a7a7',
        border: '#2a2a2a'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 26, 26, 0.5)',
        card: '0 20px 60px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at center, rgba(255, 26, 26, 0.18), transparent 40%)',
        grid: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
      },
      fontFamily: {
        display: ['Arial Black', 'Segoe UI', 'sans-serif'],
        body: ['Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
