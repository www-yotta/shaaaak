import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, ButtonProps } from "components/atoms/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

export type Props = ButtonProps & {
  redirectPath: string;
};

export const ArticleItemButton: FC<Props> = ({
  children,
  redirectPath,
  ...props
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Button
      className={classes.root}
      variant="outlined"
      onClick={() => history.push(redirectPath)}
      {...props}
    >
      {children}
    </Button>
  );
};
