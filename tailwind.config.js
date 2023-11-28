/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C4DDC",
        secondary: "#F8FAFC",
        grey: "#E3E8EF",
        btn: "#14151F",
        paragraf: "#4B5565",
        surface: "#F0F3FF",
      },
      fontFamily: {
        secondary: "Georgia",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05);",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        bounce: "bounce 1s ",
      },
      backgroundImage: {
        "bg-niagahoster":
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};
