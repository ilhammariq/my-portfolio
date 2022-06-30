/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        linked: "#0072b1",
        instagram: "#FF039C",
        line: "#00B900",
        wa: "#25D366",
        github: "#171412",
      },
    },
    screens: {
      "2xl": "1320px",
    },
  },
  plugins: [],
};
