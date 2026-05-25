/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Heiven brand colors - these ADD to Tailwind's defaults
        primary: "#0B132B", // Dark navy
        accent: "#1C8CE9", // Bright blue
        light: "#F8FAFC", // Soft background
        // Note: We don't override 'gray' to keep Tailwind's default gray-50 to gray-900
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
