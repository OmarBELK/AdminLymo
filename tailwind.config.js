/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "gray-300": "#d0d5dd",
        darkslateblue: "#05285f",
        darkslategray: "#303133",
        "gray-600": "#475467",
        "gray-500": "#667085",
        "gray-900": "#101828",
        "gray-gray-400": "#a0aec0",
        lightseagreen: "#38b2ac",
        "gray-700": "#344154",
        "primary-600": "#7e56d9",
        heading: "#3f444a",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "text-md-semibold": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "9xl": "28px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
