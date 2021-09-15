import { FC, memo } from "react";
import { Spacer } from "components/atoms/Spacer";
import { ArticleItem } from "components/molecules/ArticleItem";
import { Main } from "components/templates/Main";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

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

// TODO: organismsに移動する
type AticleProps = {
  data: {
    title: string;
    text: string;
    buttonLabel: string;
    thumbnailPath: string;
  }[];
};

const Article: FC<AticleProps> = ({ data }) => {
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
          />
        );
      })}
    </div>
  );
};

type List = {
  title: string;
  text: string;
  buttonLabel: string;
  thumbnailPath: string;
};

const PageBody: FC = () => {
  const { data } = useSWR<List[]>("/list", fetcher);

  if (!data) return <></>;

  return (
    <>
      <Spacer size={12} />
      <Article data={data} />
      <Spacer size={12} />
    </>
  );
};

const Top = () => {
  return <Main Body={PageBody} />;
};

export default memo(Top);
