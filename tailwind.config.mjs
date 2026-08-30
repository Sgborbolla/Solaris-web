/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        solaris: {
          dark: '#0F172A',
          primary: '#2563EB',
          accent: '#F59E0B',
          light: '#F8FAFC',
          gray: '#F1F5F9',
          text: '#475569',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'pill': '9999px',
      },
    },
  },
  plugins: [],
};