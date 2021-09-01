import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Header } from "components/organisms/Header";
import theme from "theme"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    headerWrap: {
      width: '100%',
      minWidth: 960,
      // display: 'flex',
      // justifyContent: 'center',
      height: 60,
      backgroundColor: '#FFF',
    },
    header: {
      margin: '0 auto',
      width: 960,
      minWidth: 960,
      transition: '.2s',
      padding: '0 1rem',
      [theme.breakpoints.up('md')]: {
        padding: 0,
      }
    },
    bodyWrap: {
      width: '100%',
      // display: 'flex',
      // justifyContent: 'center',
      // TODO: themeに移動する
      backgroundColor: '#DEEBFF'
    },
    body: {
      width: 960,
      margin: '0 auto',
      minHeight: 'calc(100vh - 60px - 30px)',
      transition: '.2s',
      padding: '0 1rem',
      [theme.breakpoints.up('md')]: {
        padding: 0,
      }
    },
    footerWrap: {
      width: '100%',
      minWidth: 960,
      // display: 'flex',
      // justifyContent: 'center',
      height: 30,
      backgroundColor: '#FFF',
    },
    footer: {
      margin: '0 auto',
      width: 960,
      transition: '.2s',
      padding: '0 1rem',
      [theme.breakpoints.up('md')]: {
        padding: 0,
      }
    }
  })
);

export type MainProps = {
  // TODO: 型定義をする
  Body: any,
}

export const Main:FC<MainProps> = ({Body}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrap}>
        <div className={classes.header}>
          <Header />
        </div>
      </div>
      <div className={classes.bodyWrap}>
        <div className={classes.body}>
          <Body />
        </div>
      </div>
      <div className={classes.footerWrap}>
        <div className={classes.footer}>
          <div>footerです</div>
        </div>
      </div>
    </div>
  );
};

// export default memo(Main);
