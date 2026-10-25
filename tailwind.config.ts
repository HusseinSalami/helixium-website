import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080b14",
        panel: "#101521",
        line: "#263044",
        mist: "#a8b4ca",
        teal: "#55e6d0",
        violet: "#9a77ff"
      }
    }
  },
  plugins: []
};

export default config;
