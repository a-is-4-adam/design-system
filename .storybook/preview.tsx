import type { Preview } from "@storybook/react";
import React from "react";

import "../src/tailwind/tailwind.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "#ebf4fb",
          padding: "24px",
          height: "calc(100vh - 48px)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
