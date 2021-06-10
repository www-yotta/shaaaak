import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { UserIcon } from "components/atoms/UserIcon";
import { Box } from "components/atoms/Box";
import { Typography } from "components/atoms/Typography";
import { Spacer } from "components/atoms/Spacer";
import { FollowButton } from "components/organisms/FollowButton";
import theme, { colorBlack } from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      // justifyContent: "space-between",
      // alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: theme.spacing(3),
      // TODO: material-uiのパレットで指定できるようにする
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
    profile: {
      display: "flex",
      flexGrow: 1,
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

export type UserInfoCardProps = {
  avator: string;
  name: string;
  followCount: number;
  followerCount: number;
  sns: {
    twitter: string;
  };
  siteUrl: string;
};

// TODO: データの持ち方を考える
export const UserInfoCard: FC<UserInfoCardProps> = ({
  avator,
  name,
  followCount,
  followerCount,
  sns,
  siteUrl,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...props}>
      {/* TODO: snsアイコンでリンク指定 */}
      <Box>
        <UserIcon src={avator} />
        <UserIcon src={avator} />
      </Box>
      {/* TODO: プロフィール情報を実装 */}
      <Box className={classes.profile}>
        <UserIcon src={avator} />
        <Box className={classes.userTextBox}>
          <Typography className={classes.userText}>
            <span className={classes.nameText}>{name}</span>
            <br />
            <span className={classes.followText}>
              フォロワー：{followCount}人
            </span>
          </Typography>
        </Box>
      </Box>
      {/* TODO: 外からコンポーネントを入れる？入れないならこれはorganismsになる */}
      <FollowButton isFollow={false} />
    </Box>
  );
};
