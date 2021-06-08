import { FC, useCallback, useEffect } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 100,
      height: 100,
      position: "relative",
      border: "1px solid #000",
      borderRadius: "50%",
      overflow: "hidden",
    },
    fileDrop: {
      width: "100%",
      height: "100%",
    },
    imageSelect: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40,
    },
    previewImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 100,
      height: 100,
      objectFit: "cover",
      verticalAlign: "bottom",
    },
  })
);

export type UserImageDropZoneProps = {
  registerName: string;
  // TODO: react-hook-formの型をつける
  useFormMethod: any;
};

export const UserImageDropZone: FC<UserImageDropZoneProps> = ({
  registerName,
  useFormMethod,
}) => {
  const classes = useStyles();
  const { register, unregister, setValue, watch } = useFormMethod;
  const fileData = watch(registerName);
  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(registerName, droppedFiles, { shouldValidate: true });
    },
    [setValue, registerName]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "",
  });

  useEffect(() => {
    register(registerName);
    return () => {
      unregister(registerName);
    };
  }, []);

  return (
    <div {...getRootProps()} className={classes.root}>
      <input className={classes.fileDrop} {...getInputProps()} />
      {/* TODO: 画像選択の見た目に修正する */}
      <div className={classes.imageSelect}>
        {!fileData?.length && <span>+</span>}
        {/* <p>画像を選んでね</p> */}
      </div>
      {!!fileData?.length && (
        <img
          src={URL.createObjectURL(fileData[0])}
          className={classes.previewImage}
        />
      )}
    </div>
  );
};
