import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, ButtonProps } from "components/atoms/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

export const ArticleItemButton: FC<ButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="outlined" {...props}>
      {children}
    </Button>
  );
};
