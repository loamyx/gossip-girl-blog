import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          light: '#F4C430',
          dark: '#B8860B',
        },
        purple: {
          DEFAULT: '#9333EA',
          light: '#A855F7',
          dark: '#7E22CE',
        },
        navy: {
          DEFAULT: '#0a0a0f',
          light: '#1a1a2e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
