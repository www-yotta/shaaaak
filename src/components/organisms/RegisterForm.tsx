import { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TextField } from "components/atoms/TextField";
import { Typography } from "components/atoms/Typography";
import { Paper } from "components/atoms/Paper";
import { Spacer } from "components/atoms/Spacer";
import theme from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 600,
      padding: theme.spacing(3),
    },
    title: {
      fontWeight: "bold",
    },
  })
);

export type RegisterFormProps = {};

export const RegisterForm: FC<RegisterFormProps> = () => {
  const classes = useStyles();
  return (
    // TODO: 登録フォームを共通化する？
    <Paper className={classes.root}>
      <Typography className={classes.title}>新規投稿</Typography>
      <Spacer size={theme.spacing(4)} />
      <TextField
        required
        variant="outlined"
        label="タイトル"
        size="small"
        fullWidth
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        required
        variant="outlined"
        label="カテゴリ"
        size="small"
        fullWidth
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        required
        variant="outlined"
        label="URL"
        size="small"
        fullWidth
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        variant="outlined"
        label="メッセージ"
        size="small"
        fullWidth
        multiline
        rowsMax={4}
        rows={4}
      />
    </Paper>
  );
};
