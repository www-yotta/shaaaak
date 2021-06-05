import React from "react";
import { Meta } from "@storybook/react";
import { UserHeaderCard } from "components/molecules/UserHeaderCard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/UserHeaderCard",
  component: UserHeaderCard,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <UserHeaderCard count={23} name="三波　ヨタ" />
  </Template>
);
