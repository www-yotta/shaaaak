import React, { FC } from "react";
import { Box } from "components/atoms/Box";
import { ArticleItem } from "components/molecules/ArticleItem";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Spacer } from "components/atoms/Spacer";
import theme from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
    },
    carouselButton: {
      boxShadow: "0px 3px 6px rgb(0 0 0 / 16%)",
      minWidth: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        width: 30,
        height: 30,
      },
    },
    recommendBox: {
      display: "flex",
      overflowX: "scroll",
      padding: theme.spacing(1, 0),
    },
    recommendItem: {
      minWidth: 200,
    },
  })
);

export type RecommendCarouselProps = {};
export const RecommendCarousel: FC<RecommendCarouselProps> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.carouselButton}>
        <FaCaretLeft />
      </Box>
      <Spacer size={theme.spacing(3)} />
      {/* TODO: 実際のデータを入れる */}
      <Box className={classes.recommendBox}>
        <ArticleItem
          buttonLabel="詳細を見る"
          text="aaaaaaaaaaaaaa"
          thumbnailPath="https://placehold.jp/288x150.png"
          title="ttets"
          className={classes.recommendItem}
        />
        <Spacer size={theme.spacing(3)} />
        <ArticleItem
          buttonLabel="詳細を見る"
          text="aaaaaaaaaaaaaa"
          thumbnailPath="https://placehold.jp/288x150.png"
          title="ttets"
          className={classes.recommendItem}
        />
        <Spacer size={theme.spacing(3)} />
        <ArticleItem
          buttonLabel="詳細を見る"
          text="aaaaaaaaaaaaaa"
          thumbnailPath="https://placehold.jp/288x150.png"
          title="ttets"
          className={classes.recommendItem}
        />
        <Spacer size={theme.spacing(3)} />
        <ArticleItem
          buttonLabel="詳細を見る"
          text="aaaaaaaaaaaaaa"
          thumbnailPath="https://placehold.jp/288x150.png"
          title="ttets"
          className={classes.recommendItem}
        />
        <Spacer size={theme.spacing(3)} />
        <ArticleItem
          buttonLabel="詳細を見る"
          text="aaaaaaaaaaaaaa"
          thumbnailPath="https://placehold.jp/288x150.png"
          title="ttets"
          className={classes.recommendItem}
        />
      </Box>
      <Spacer size={theme.spacing(3)} />
      <Box className={classes.carouselButton}>
        <FaCaretRight />
      </Box>
    </Box>
  );
};
