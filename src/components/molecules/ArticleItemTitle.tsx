import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: 0,
      fontWeight: "bold",
      fontSize: 16,
      color: "#383838",
    },
  })
);

export type ArticleItemTitleProps = {
  title: string;
};

export const ArticleItemTitle: FC<ArticleItemTitleProps> = ({
  title,
  ...props
}) => {
  const classes = useStyles();

  return (
    <p className={classes.root} {...props}>
      {title}
    </p>
  );
};
