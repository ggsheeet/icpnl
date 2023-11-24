/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        figtree: ["Figtree"]
      },
      colors: {
        "brand-bp-green": "var(--clr-bp-green)",
        "brand-bp-vibe": "var(--clr-bp-vibe)",
        "brand-white-smoke": "var(--clr-white-smoke)",
        "brand-orange-plum": "var(--clr-orange-plum)",
      },
    },
  },
  plugins: [],
}
