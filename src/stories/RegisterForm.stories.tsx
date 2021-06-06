import React from "react";
import { Meta } from "@storybook/react";

import { RegisterForm } from "components/organisms/RegisterForm";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/RegisterForm",
  component: RegisterForm,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <RegisterForm />
  </Template>
);
