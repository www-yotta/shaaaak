import React from "react";
import { Meta } from "@storybook/react";

import { RecommendCarousel } from "components/molecules/RecommendCarousel";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/RecommendCarousel",
  component: RecommendCarousel,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Default = () => (
  <Template>
    <RecommendCarousel />
  </Template>
);
