import { FC, memo } from "react";
import { Spacer } from "components/atoms/Spacer";
import { ArticleItem } from "components/molecules/ArticleItem";
import { Main } from "components/templates/Main";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    Article: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
    },
    ArticleItem: {
      // marginRight: 12,
      // marginBottom: 12,
      // NOTE: 三等分から余白の合計を三等分したpxを引いてる
      width: 'calc(33.3333% - 8px)',
      '&:nth-child(3n)': {
        // marginRight: 0,
      }
    }
  })
);



// TODO: テストデータ。後で消す。
const testData = [
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
  {
    title: 'テスト',
    text: "テキストです",
    buttonLabel: "ボタンです",
    thumbnailPath: "https://placehold.jp/288x150.png",
  },
]

// TODO: organismsに移動する
type AticleProps = {
  data: {
    title: string
    text: string
    buttonLabel: string
    thumbnailPath: string
  }[],
}
const Article:FC<AticleProps> = ({data}) => {
  const classes = useStyles()
  return (
    <div className={classes.Article}>
      {data.map((item, index) => {
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
  )
}

const PageBody:FC = () => {
  return (
    <>
      <Spacer size={12} />
      <Article data={testData} />
      <Spacer size={12} />
    </>
  );
}

const Top = () => {
  return <Main Body={PageBody} />;
};

export default memo(Top);
