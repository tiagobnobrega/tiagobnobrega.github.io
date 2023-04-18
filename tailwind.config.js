/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ds: {
          "page-grad-from": "rgb(var(--color-page-grad-from) / <alpha-value>)",
          "page-grad-to": "rgb(var(--color-page-grad-to) / <alpha-value>)",
          primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-brand-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--color-brand-tertiary) / <alpha-value>)",
        },
      },
      textColor: {
        ds: {
          base: "rgb(var(--color-text-base) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        },
      },
      backgroundColor: {
        ds: {
          header: "rgb(var(--color-header-bg) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
