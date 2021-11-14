import { FC } from "react";
import { ArticleItem } from "components/molecules/ArticleItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    Article: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
    },
    ArticleItem: {
      // NOTE: 三等分から余白の合計を三等分したpxを引いてる
      width: "calc(33.3333% - 8px)",
    },
  })
);

// TODO: 共通のtypeとして外だしする？
export type PartsProps = {
  id: number;
  title: string;
  text: string;
  buttonLabel: string;
  thumbnailPath: string;
  sandboxUrl: string;
};

export type AticleProps = {
  data: PartsProps[];
};

export const Article: FC<AticleProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.Article}>
      {data.map((item) => {
        return (
          <ArticleItem
            title={item.title}
            text={item.text}
            buttonLabel={item.buttonLabel}
            thumbnailPath={item.thumbnailPath}
            className={classes.ArticleItem}
            redirectPath={`parts/${item.id}`}
          />
        );
      })}
    </div>
  );
};
