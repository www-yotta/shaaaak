import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box } from "components/atoms/Box";
import { colorBlack } from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: `1px solid ${colorBlack}`,
      overflow: "hidden",
    },
  })
);

export type UserIconProps = {
  src: string;
};

export const UserIcon: FC<UserIconProps> = ({ src, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...props}>
      <img src={src} />
    </Box>
  );
};
