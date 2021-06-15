import { FC, MouseEventHandler } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box } from "components/atoms/Box";
import { colorBlack } from "theme";
import clsx from "clsx";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: `1px solid ${colorBlack}`,
      overflow: "hidden",
      "& img": {
        width: "100%",
      },
    },
  })
);

export type UserIconProps = {
  src: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const UserIcon: FC<UserIconProps> = ({ src, className, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <img src={src} />
    </Box>
  );
};
