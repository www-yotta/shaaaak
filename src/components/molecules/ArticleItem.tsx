import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import theme from "theme";
import { Spacer } from "components/atoms/Spacer";
import { Paper } from "components/atoms/Paper";
import { ArticleItemButton } from "components/molecules/ArticleItemButton";
import { ArticleItemThumbnail } from "components/molecules/ArticleItemThumbnail";
import { ArticleItemTitle } from "components/molecules/ArticleItemTitle";
import { ArticleItemText } from "components/molecules/ArticleItemText";
import clsx from "clsx";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 312,
      padding: theme.spacing(3),
    },
  })
);

export type ArticleItemProps = {
  title: string;
  text: string;
  buttonLabel: string;
  thumbnailPath: string;
  className?: string;
};

export const ArticleItem: FC<ArticleItemProps> = ({
  title,
  text,
  buttonLabel,
  thumbnailPath,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)} {...props}>
      <ArticleItemThumbnail src={thumbnailPath} />
      <Spacer size={theme.spacing(2)} />
      <ArticleItemTitle title={title} />
      <Spacer size={theme.spacing(1)} />
      <ArticleItemText text={text} />
      <Spacer size={theme.spacing(1)} />
      <ArticleItemButton>{buttonLabel}</ArticleItemButton>
    </Paper>
  );
};
