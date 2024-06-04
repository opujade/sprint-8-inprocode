/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ec765c",
          secondary: "#75b5be",
          "base-100": "#f8eadd",
        },
      },
      {
        dark: {
          primary: "#8c3a2d",
          secondary: "#3b5a5e",
          "base-100": "#3b2a25",
        },
      },
    ],
  },
};
