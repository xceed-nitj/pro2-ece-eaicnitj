/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        accent: {
          50: "hsl(151.8, 81%, 95.9%)",
          100: "hsl(149.3, 80.4%, 90%)",
          200: "hsl(152.39999999999998, 76%, 80.4%)",
          300: "hsl(156.20000000000005, 71.6%, 66.9%)",
          400: "hsl(158.10000000000002, 64.4%, 51.6%)",
          500: "hsl(160.10000000000002, 84.1%, 39.4%)",
          600: "hsl(161.39999999999998, 93.5%, 30.4%)",
          700: "hsl(161.39999999999998, 93.5%, 30.4%)",
          800: "hsl(161.39999999999998, 93.5%, 30.4%)",
          900: "hsl(164.20000000000005, 85.7%, 16.5%)",
          950: "hsl(165.70000000000005, 91.3%, 9%)",
        },
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "traslateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 15s linear infinite",
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
