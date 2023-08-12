/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxlA: { min: '1440px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1028px' },
      // => @media (max-width: 1023px) { ... }

      lgMin: { min: '1023px' },
      // => @media (min-width: 1023px) { ... }
md: { max: '834px' },
      // => @media (max-width: 767px) { ... }

      mdMin: { max: '690px' },
      // => @media (min-width: 7px) { ... }

      xlsm: { max: '550px' },
      // => @media (max-width: 550px) { ... }
      xlsmMin: { min: '550px' },
      // => @media (min-width: 550px) { ... }

      sm: { max: '375px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
