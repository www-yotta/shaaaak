import { FC } from "react";

export type SpacerProps = {
  size: number;
  axis?: "vertical" | "horizontal";
  style?: {};
};

export const Spacer: FC<SpacerProps> = ({
  size,
  axis,
  style = {},
  ...delegated
}) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  // TODO: jssで書き直す?
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};
