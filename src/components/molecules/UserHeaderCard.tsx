import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { UserIcon } from "components/atoms/UserIcon";
import { Box } from "components/atoms/Box";
import { Typography } from "components/atoms/Typography";
import { Spacer } from "components/atoms/Spacer";
import { FollowButton } from "components/organisms/FollowButton";
import theme, { colorBlack } from "theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: theme.spacing(2),
      // TODO: material-uiのパレットで指定できるようにする
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
    userTextBox: {
      display: "flex",
      alignItems: "center",
    },
    userText: {
      lineHeight: 1,
    },
    nameText: {
      color: colorBlack,
      fontSize: 14,
      fontWeight: "bold",
    },
    followText: {
      color: colorBlack,
      fontSize: 12,
    },
  })
);

export type UserHeaderCardProps = {
  name: string;
  count: number;
};

export const UserHeaderCard: FC<UserHeaderCardProps> = ({
  name,
  count,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display="flex">
        <UserIcon src="#" />
        <Spacer size={theme.spacing(3)} />
        <Box className={classes.userTextBox}>
          <Typography className={classes.userText}>
            <span className={classes.nameText}>{name}</span>
            <br />
            <span className={classes.followText}>フォロワー：{count}人</span>
          </Typography>
        </Box>
      </Box>
      <FollowButton isFollow={false} />
    </Box>
  );
};
