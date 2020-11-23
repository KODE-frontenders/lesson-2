
import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "shared/theme";

export const decorators = [
  (Story, { args }) => (
    <ThemeProvider theme={args.theme || lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
         actions: { argTypesRegex: "^on[A-Z].*" },
       };