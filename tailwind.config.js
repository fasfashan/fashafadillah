/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121926",
        secondary: "#E9BD10",
        gray: "#364152",
        btn: "#14151F",
      },
      fontFamily: {
        secondary: "Georgia",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        "bg-niagahoster":
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      boxShadow: {
        linear:
          "box-shadow: 0px 0px 0px 3px #F4F6F8, 0px 0px 0px 1px #2B2D43, 0px 4px 6px 0px rgba(0, 0, 0, 0.14), 0px 9px 14px -5px rgba(255, 255, 255, 0.30) inset;",
      },
    },
  },
  plugins: [],
};
