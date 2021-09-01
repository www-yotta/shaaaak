import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Logo } from "components/atoms/Logo";
import { Spacer } from "components/atoms/Spacer";
import { HeaderUserIcon } from "components/organisms/HeaderUserIcon";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import theme from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      height: 60,
      alignItems: "center",
      "& a": {
        color: "#383838",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    searchInput: {
      height: 28,
      padding: 0,
      boxSizing: "border-box",
      border: "1px solid #000",
      borderRadius: 5,
      minWidth: 400,
      flexGrow: 1,
    },
  })
);

export type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({className}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Logo />
      <Spacer size={theme.spacing(4)} />
      <input type="text" className={classes.searchInput} />
      <Spacer size={theme.spacing(4)} />
      <Link to="/category">カテゴリ一覧</Link>
      <Spacer size={theme.spacing(3)} />
      <Link to="/favorite">お気に入り</Link>
      <Spacer size={theme.spacing(3)} />
      <Link to="/post">投稿する</Link>
      <Spacer size={theme.spacing(4)} />
      <HeaderUserIcon />
    </div>
  );
};
