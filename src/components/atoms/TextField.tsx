import { FC, ReactNode } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
    requiredIcon: {
      backgroundColor: "#f53b3b",
      color: "#fff",
      padding: "2px 4px",
      borderRadius: 4,
      fontSize: 10,
      fontWeight: "bold",
      lineHeight: 1.2,
      marginLeft: 4,
    },
  })
);

export type TextFieldProps = MuiTextFieldProps & {};

const RequiredLabel: FC<Pick<TextFieldProps, "label" | "required">> = ({
  label,
  required,
}) => {
  const classes = useStyles();
  return (
    // TODO: フォントを小さくする
    <div className={classes.root}>
      {label}
      {required && <span className={classes.requiredIcon}>必須</span>}
    </div>
  );
};

export const TextField: FC<TextFieldProps> = ({
  required,
  label,
  ...props
}) => {
  return (
    <MuiTextField
      label={<RequiredLabel label={label} required={required} />}
      {...props}
    />
  );
};
