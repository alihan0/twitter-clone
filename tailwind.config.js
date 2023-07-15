/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base : 'hsl(203, 89%, 53%)',
          dark : 'hsl(203, 89%, 46%)',
          light : 'hsl(203, 89%, 96%)',
        },
        gray : {
          dark : '#657786',
          light: '#AAB8C2',
          extraLight : '#E1E8ED',
          lightest: '#F5F8FA',
        },
        black: '#14171A'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
