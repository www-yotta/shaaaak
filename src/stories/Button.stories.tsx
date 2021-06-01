import React from "react";
import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "components/atoms/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
} as Meta;

const handleClick = () => {
  alert("Click!!");
};

export const Normal = () => <Button>Hoge</Button>;

export const Onclick = () => <Button onClick={handleClick}>Hoge</Button>;
