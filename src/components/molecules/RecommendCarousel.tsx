import React, { FC } from "react";
import { Box } from "components/atoms/Box";
import { ArticleItem } from "components/molecules/ArticleItem";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Spacer } from "components/atoms/Spacer";
import { PartsProps } from "components/molecules/Article";
import theme from "theme";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

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
      width: "100%",
      display: "flex",
      padding: theme.spacing(1, 0),
      "& .simplebar-content": {
        display: "flex",
      },
    },
    recommendItem: {
      minWidth: 200,
      "& p": {
        height: 40,
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2,
        overflow: "hidden",
      },
    },
  })
);

// TODO: 追加機能実装あり
export type RecommendCarouselProps = {
  data: PartsProps[];
};
export const RecommendCarousel: FC<RecommendCarouselProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.carouselButton}>
        <FaCaretLeft />
      </Box>
      <SimpleBar className={classes.recommendBox}>
        <Spacer size={theme.spacing(3)} />
        {data.map((item, index) => {
          return (
            <>
              <ArticleItem
                buttonLabel={item.buttonLabel}
                text={item.text}
                thumbnailPath={item.thumbnailPath}
                title={item.title}
                className={classes.recommendItem}
                redirectPath={`/parts/${item.id}`}
              />
              {data.length !== index + 1 && <Spacer size={theme.spacing(3)} />}
            </>
          );
        })}
        <Spacer size={theme.spacing(3)} />
      </SimpleBar>
      <Box className={classes.carouselButton}>
        <FaCaretRight />
      </Box>
    </Box>
  );
};
