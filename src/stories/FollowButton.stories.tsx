import React from "react";
import { Meta } from "@storybook/react";

import { FollowButton } from "components/organisms/FollowButton";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/FollowButton",
  component: FollowButton,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Follow = () => (
  <Template>
    <FollowButton isFollow={true} />
  </Template>
);

export const UnFollow = () => (
  <Template>
    <FollowButton isFollow={false} />
  </Template>
);
