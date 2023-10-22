/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-colors100": "var(--neutral-colors100)",
        "neutral-colors300": "var(--neutral-colors300)",
        "neutral-colors400": "var(--neutral-colors400)",
        "neutral-colors500": "var(--neutral-colors500)",
        "neutral-colors600": "var(--neutral-colors600)",
        "neutral-colors700": "var(--neutral-colors700)",
        "primary-paletteblue": "var(--primary-paletteblue)",
      },
      fontFamily: {
        "display-1-extra-bold": "var(--display-1-extra-bold-font-family)",
        "display-1-regular": "var(--display-1-regular-font-family)",
        "display-1-semi-bold": "var(--display-1-semi-bold-font-family)",
        "display-1-uppercase-semi-bold": "var(--display-1-uppercase-semi-bold-font-family)",
        "display-2-semi-bold": "var(--display-2-semi-bold-font-family)",
        "display-3-extra-bold": "var(--display-3-extra-bold-font-family)",
        "display-3-regular": "var(--display-3-regular-font-family)",
        "display-3-semi-bold": "var(--display-3-semi-bold-font-family)",
        "display-3-underline-regular": "var(--display-3-underline-regular-font-family)",
      },
      boxShadow: {
        "neutral-shadow-02": "var(--neutral-shadow-02)",
      },
    },
  },
  plugins: [],
};
