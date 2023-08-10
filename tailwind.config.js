/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: "#cdc6be",
        black: "#000",
        gainsboro: "#d9d9d9",
        gray: "#1d1d1b",
        dimgray: "#75726c",
        white: "#fff",
      },
      fontFamily: {
        "old-english-text-mt": "'Old English Text MT'",
        canopee: "Canopee",
        inherit: "inherit",
      },
    },
    fontSize: {
      "45xl": "64px",
      "109xl": "128px",
      "77xl": "96px",
      "181xl": "200px",
      "281xl": "300px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
