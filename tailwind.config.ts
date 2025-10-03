/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    // Import the GSA Vue UI preset for consistent theming
    require("@gsa/vue-ui/tailwind-preset"),
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // IMPORTANT: Include the UI package dist files so Tailwind can see classes
    "./node_modules/@gsa/vue-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
    },
  },
  plugins: [],
};
