import { FC } from "react";
import { Box as MuiBox, BoxProps as MuiBoxProps } from "@material-ui/core";

export type BoxProps = MuiBoxProps & {};

export const Box: FC<BoxProps> = ({ className, ...props }) => {
  return <MuiBox className={className} {...props} />;
};
