import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: 0,
      fontSize: 13,
      color: "#383838",
    },
  })
);

export type ArticleItemTextProps = {
  text: string;
};

export const ArticleItemText: FC<ArticleItemTextProps> = ({
  text,
  ...props
}) => {
  const classes = useStyles();

  return (
    <p className={classes.root} {...props}>
      {text}
    </p>
  );
};
