/** @type {import('tailwindcss').Config} */

import { space as spacing } from "./src/tokens";

export default {
  content: ["./src/tailwind/**/*.{ts,tsx}", "./.storybook/preview.tsx"],
  theme: {
    spacing,
    extend: {
      colors: {
        stone: {
          250: "#e3e3e3",
          350: "#c7c7c7",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /gap-\d/,
    },
    {
      pattern: /justify-.+/,
    },
    {
      pattern: /items-.+/,
    },
  ],
};
