import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // TODO: themeの色で指定する
      border: "1px solid #707070",
      borderRadius: 10,
    },
  })
);

export type ArticleItemThumbnailProps = {
  src: string;
  alt?: string;
  className?: string;
};

export const ArticleItemThumbnail: FC<ArticleItemThumbnailProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={alt || ""}
      className={clsx(classes.root, className)}
      {...props}
    />
  );
};
