import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import logo from "assets/logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 110,
      height: 40,
      verticalAlign: "bottom",
      cursor: "pointer",
    },
  })
);

export type LogoProps = {
  className?: string;
  onClick?: any;
};

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  const classes = useStyles();

  return (
    <img
      src={logo}
      alt="Shaaaakのサイトロゴ"
      className={clsx(classes.root, className)}
      {...props}
    />
  );
};
