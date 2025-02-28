/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-green': '#5B7813',
        'custom-green-hover': '#4A6210',
        'kosan-orange': 'rgb(250, 166, 22)',
        'kosan-light-blue': 'rgb(163, 204, 238)',
        'kosan-dark-blue': 'rgb(25, 90, 159)',
        'kosan-light-purple': 'rgb(190, 140, 184)',
        'kosan-dark-purple': 'rgb(124, 27, 103)',
        'kosan-light-sand': 'rgb(238, 234, 213)',
        'kosan-dark-sand': 'rgb(146, 143, 122)',
        'cutom-red': '#701717',
        'custom-green-active': '#4A6510',
      },
    },
  },
  plugins: [],
};
