import React, { FC } from "react";
import { Box } from "components/atoms/Box";
import { PartsSandbox } from "components/organisms/PartsSandbox";
import { PartsDetail } from "components/molecules/PartsDetail";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { PartsProps } from "components/molecules/Article";
import theme from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: theme.spacing(2),
      // TODO: material-uiのパレットで指定できるようにする
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
    sandbox: {
      display: "flex",
      width: "50%",
      height: 400,
    },
  })
);

export type PartsDetailCardProps = {
  data: PartsProps;
};
export const PartsDetailCard: FC<PartsDetailCardProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PartsSandbox src={data.sandboxUrl} className={classes.sandbox} />
      <PartsDetail title={data.title} text={data.text} />
    </Box>
  );
};
