import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pastelBabyBlue: "#8ABFE8",
        pastelBlue: "#869FDE",
        pastelDarkBlue: "#293380",
        pastelPink: "#DDBFE4",
        pastelRed: "#953D60",
        pastelWhite: "#F0EFF7",
      },
    },
  },
  plugins: [],
} satisfies Config;
