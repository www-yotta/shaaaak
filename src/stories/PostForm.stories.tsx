import React from "react";
import { Meta } from "@storybook/react";

import { PostForm } from "components/organisms/PostForm";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/PostForm",
  component: PostForm,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <PostForm />
  </Template>
);
