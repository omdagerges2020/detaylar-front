/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'special': '900px',
      },
      backgroundImage: {
        'hero-pattern': "url('/app/images/img-2.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
});


