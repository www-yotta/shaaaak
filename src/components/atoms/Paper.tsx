import { FC } from "react";
import {
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 5,
    },
  })
);

export type PaperProps = MuiPaperProps & {};

export const Paper: FC<PaperProps> = ({ className, ...props }) => {
  const classes = useStyles();
  return <MuiPaper className={clsx(classes.root, className)} {...props} />;
};
