import React, { FC } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      border: "1px solid #000",
      borderRadius: 4,
      overflow: "hidden",
    },
  })
);

export type PartsSandboxProps = {
  src: string;
  className?: string;
};
export const PartsSandbox: FC<PartsSandboxProps> = ({ src, className }) => {
  const classes = useStyles();

  return (
    <iframe
      className={clsx(classes.root, className)}
      src={src}
      title="React"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};
