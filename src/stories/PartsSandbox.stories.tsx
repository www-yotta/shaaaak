import React from "react";
import { Meta } from "@storybook/react";

import { PartsSandbox } from "components/organisms/PartsSandbox";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/PartsSandbox",
  component: PartsSandbox,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <PartsSandbox src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark" />
  </Template>
);
