import React from "react";
import { Meta } from "@storybook/react";

import { UserIcon } from "components/atoms/UserIcon";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/UserIcon",
  component: UserIcon,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <UserIcon src="https://placehold.jp/35x35.png" />
  </Template>
);
