/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      fontFamily: {
        poppins: ["Poppins"],
        figtree: ["Figtree"]
      },
      colors: {
        "brand-bp-green": "var(--clr-bp-green)",
        "brand-bp-vibe": "var(--clr-bp-vibe)",
        "brand-white-smoke": "var(--clr-white-smoke)",
        "brand-orange-plum": "var(--clr-orange-plum)",
        "brand-icpnl-red": "var(--clr-icpnl-red)",
        "brand-pepper": "var(--clr-pepper)"
      },
    },
  },
  plugins: [],
}
