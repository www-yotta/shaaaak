import { FC } from "react";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "components/atoms/Button";
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
    button: {
      backgroundColor: "#ccff90",
      width: "100%",
      "&:hover": {
        backgroundColor: "#99cc60",
      },
    },
  })
);

export type PostFormProps = {};

export const PostForm: FC<PostFormProps> = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const handlePost = (values: any) => {
    // TODO: 登録処理を書く
    console.log(values);
  };

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
        {...register("title")}
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        required
        variant="outlined"
        label="カテゴリ"
        size="small"
        fullWidth
        {...register("category")}
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        required
        variant="outlined"
        label="URL"
        size="small"
        fullWidth
        {...register("url")}
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
        {...register("message")}
      />
      <Spacer size={theme.spacing(3)} />
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleSubmit(handlePost)}
      >
        投稿する
      </Button>
    </Paper>
  );
};
