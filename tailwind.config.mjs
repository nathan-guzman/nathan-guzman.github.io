/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          deep: '#F5F1E8',
        },
        ink: {
          DEFAULT: '#2A2A28',
          deep: '#1F1F1D',
          soft: '#4A4A46',
        },
        sage: {
          DEFAULT: '#6B8E5A',
          deep: '#3D5A3D',
        },
        terracotta: {
          DEFAULT: '#B87E5A',
          tan: '#C9A47E',
        },
        warmgray: {
          DEFAULT: '#8B8579',
          light: '#C8C2B5',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '700px',
      },
    },
  },
  plugins: [],
};
