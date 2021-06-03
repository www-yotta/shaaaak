import React from "react";
import { Meta } from "@storybook/react";

import {
  ArticleItem,
  ArticleItemProps,
} from "components/molecules/ArticleItem";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/ArticleItem",
  component: ArticleItem,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const props: ArticleItemProps = {
  text:
    "ここにテキストがはいります。ここにテキストがはいります。ここにテキストがはいります。ここにテキストがはいります。",
  buttonLabel: "詳細を見る",
  title: "すごいやつなのでつかってね",
  thumbnailPath: "https://placehold.jp/288x150.png",
};

export const Default = () => (
  <Template>
    <ArticleItem {...props}>詳細を見る</ArticleItem>
  </Template>
);
