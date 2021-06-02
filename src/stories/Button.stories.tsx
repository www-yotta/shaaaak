import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "components/atoms/Button";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
} as Meta;

const handleClick = () => {
  alert("Click!!");
};

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Normal = () => (
  <Template>
    <Button variant="outlined" color="default">
      詳細を見る
    </Button>
  </Template>
);

export const Onclick = () => (
  <Button variant="outlined" color="default" onClick={handleClick}>
    Hoge
  </Button>
);
