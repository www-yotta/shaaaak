import { FC } from "react";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "components/atoms/Button";
import { TextField } from "components/atoms/TextField";
import { Typography } from "components/atoms/Typography";
import { Paper } from "components/atoms/Paper";
import { Spacer } from "components/atoms/Spacer";
import { UserImageDropZone } from "components/molecules/UserImageDropZone";
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

export type RegisterFormProps = {};

export const RegisterForm: FC<RegisterFormProps> = () => {
  const classes = useStyles();
  const useFormMethode = useForm();
  const { register, handleSubmit, control } = useFormMethode;
  const handleRegister = (values: any) => {
    // TODO: 登録処理を書く
    console.log(values);
  };

  return (
    // TODO: 登録フォームを共通化する？
    <Paper className={classes.root}>
      <Typography className={classes.title}>ユーザー登録</Typography>
      <Spacer size={theme.spacing(4)} />
      <UserImageDropZone registerName="file" useFormMethod={useFormMethode} />
      <Spacer size={theme.spacing(4)} />
      <TextField
        required
        variant="outlined"
        label="ユーザー名"
        size="small"
        fullWidth
        {...register("userName")}
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        required
        variant="outlined"
        label="ユーザーID"
        size="small"
        fullWidth
        {...register("userId")}
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
        label="紹介文"
        size="small"
        fullWidth
        multiline
        rowsMax={4}
        rows={4}
        {...register("userInfo")}
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        variant="outlined"
        label="Twitter"
        size="small"
        fullWidth
        {...register("twitter")}
      />
      <Spacer size={theme.spacing(3)} />
      <TextField
        variant="outlined"
        label="あなたのサイト"
        size="small"
        fullWidth
        {...register("site")}
      />
      <Spacer size={theme.spacing(3)} />
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleSubmit(handleRegister)}
      >
        登録する
      </Button>
    </Paper>
  );
};
