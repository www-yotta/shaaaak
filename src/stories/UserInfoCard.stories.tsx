import React from "react";
import { Meta } from "@storybook/react";
import {
  UserInfoCard,
  UserInfoCardProps,
} from "components/molecules/UserInfoCard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

export default {
  title: "components/UserInfoCard",
  component: UserInfoCard,
  argTypes: {},
} as Meta;

const Template = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const props: UserInfoCardProps = {
  avator: "https://placehold.jp/35x35.png",
  followCount: 10,
  followerCount: 10,
  name: "三波　ヨタ",
  siteUrl: "",
  sns: {
    twitter: "#",
  },
};

export const Default = () => (
  <Template>
    <UserInfoCard {...props} />
  </Template>
);
