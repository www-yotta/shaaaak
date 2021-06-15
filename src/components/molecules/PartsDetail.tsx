import React, { FC, useState } from "react";
import { Typography } from "components/atoms/Typography";
import { FaEllipsisH } from "react-icons/fa";
import { Box } from "components/atoms/Box";
import { Menu } from "components/atoms/Menu";
import { MenuItem } from "components/atoms/MenuItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "50%",
      padding: theme.spacing(2),
    },
    detailHeader: {
      display: "flex",
      borderBottom: "1px solid #000",
      padding: theme.spacing(0, 1),
    },
    title: {
      flexGrow: 1,
      fontSize: 21,
      fontWeight: "bold",
    },
    detailText: {
      paddingTop: theme.spacing(2),
    },
  })
);

export type PartsDetailProps = {
  title: string;
  className?: string;
};
export const PartsDetail: FC<PartsDetailProps> = ({ title, className }) => {
  const classes = useStyles();
  // TODO: 型定義をしっかりとする
  const [open, setOpen] = useState<any>(null);
  const handleClick = (event: any) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box className={clsx(classes.root, className)}>
      <Box className={classes.detailHeader}>
        <Typography className={classes.title}>{title}</Typography>
        <Box>
          <FaEllipsisH onClick={handleClick} />
          <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
            <MenuItem>お気に入り</MenuItem>
            <MenuItem>リンクをコピー</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Typography className={classes.detailText}>testset</Typography>
    </Box>
  );
};
