import { FC } from "react";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@material-ui/core";

export type TypographyProps = MuiTypographyProps & {};

export const Typography: FC<TypographyProps> = ({ ...props }) => {
  return <MuiTypography {...props} />;
};
