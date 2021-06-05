import { FC } from "react";
import { Button } from "components/atoms/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: 30,
    },
  })
);

export type FollowButtonProps = {
  isFollow: boolean;
};

export const FollowButton: FC<FollowButtonProps> = ({ isFollow }) => {
  const classes = useStyles();
  const variant = isFollow ? "contained" : "outlined";

  const handleFollow = () => {
    if (isFollow) {
      // TODO: フォローを外す
    } else {
      // TODO: フォローする
    }
  };

  return (
    <Button
      className={classes.root}
      onClick={handleFollow}
      color="primary"
      variant={variant}
    >
      {isFollow ? "フォロー中" : "フォロー"}
    </Button>
  );
};
