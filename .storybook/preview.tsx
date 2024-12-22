import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme"; // 테마 파일 경로를 알맞게 수정하세요.
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
