/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      "bg-off-white": "hsl(0, 0%, 94%)",
      "bg-purp": "hsl(259, 100%, 65%)",
      "purple-text": "hsl(259, 100%, 65%)",
    },

    extend: {
      fontSize: {
        "custom-large": "50px",
        // Add more custom font sizes as needed
      },
      fontWeight: {
        "custom-extra-bold": 800,
        // Add more custom font weights as needed
      },
    },
  },
  plugins: [],
};
