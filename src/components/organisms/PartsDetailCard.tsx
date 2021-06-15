import React, { FC } from "react";
import { Box } from "components/atoms/Box";
import { PartsSandbox } from "components/organisms/PartsSandbox";
import { PartsDetail } from "components/molecules/PartsDetail";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    sandbox: {
      display: "flex",
      width: "50%",
      height: 400,
    },
  })
);

export type PartsDetailCardProps = {
  src: string;
};
export const PartsDetailCard: FC<PartsDetailCardProps> = ({ src }) => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <PartsSandbox src={src} className={classes.sandbox} />
      {/* TODO: 取得したタイトルを入れる */}
      <PartsDetail title="test" />
    </Box>
  );
};
