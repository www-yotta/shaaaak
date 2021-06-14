import React from "react";
import { Meta } from "@storybook/react";
import { Header, HeaderProps } from "components/organisms/Header";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "theme";

export default {
  title: "components/Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <Router>
      <Header />
    </Router>
  </Template>
);
