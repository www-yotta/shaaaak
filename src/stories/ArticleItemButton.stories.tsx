import React from "react";
import { Meta } from "@storybook/react";

import { ArticleItemButton } from "components/molecules/ArticleItemButton";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/ArticleItemButton",
  component: ArticleItemButton,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Outlined = () => (
  <Template>
    <ArticleItemButton variant="outlined" color="default">
      詳細を見る
    </ArticleItemButton>
  </Template>
);

export const Contained = () => (
  <Template>
    <ArticleItemButton variant="contained" color="default">
      詳細を見る
    </ArticleItemButton>
  </Template>
);
