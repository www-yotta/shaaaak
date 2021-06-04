import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { colorBlack } from "theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      border: `1px solid ${colorBlack}`,
      borderRadius: 10,
      verticalAlign: "bottom",
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
