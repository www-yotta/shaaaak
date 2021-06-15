import React from "react";
import { Meta } from "@storybook/react";

import { PartsDetailCard } from "components/organisms/PartsDetailCard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/PartsDetailCard",
  component: PartsDetailCard,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <PartsDetailCard src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark" />
  </Template>
);
