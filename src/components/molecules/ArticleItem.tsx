import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "components/atoms/Paper";
import { ArticleItemButton } from "components/molecules/ArticleItemButton";
import { ArticleItemThumbnail } from "components/molecules/ArticleItemThumbnail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 312,
      // TODO: themeのspacingで指定する
      padding: 12,
    },
  })
);

export type ArticleItemProps = {
  title: string;
  text: string;
  buttonLabel: string;
  thumbnailPath: string;
};

export const ArticleItem: FC<ArticleItemProps> = ({
  title,
  text,
  buttonLabel,
  thumbnailPath,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} {...props}>
      <ArticleItemThumbnail src={thumbnailPath} />
      <p>{title}</p>
      <p>{text}</p>
      <ArticleItemButton>{buttonLabel}</ArticleItemButton>
    </Paper>
  );
};
