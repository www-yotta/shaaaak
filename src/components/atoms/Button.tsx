import { FC } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      borderRadius: 5,
      width: 288,
    },
  })
);

export type ButtonProps = MuiButtonProps & {};

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  const classes = useStyles();
  return (
    <MuiButton className={clsx(className, classes.root)} {...props}>
      {children}
    </MuiButton>
  );
};
