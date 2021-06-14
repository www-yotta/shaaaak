import { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { UserIcon } from "components/atoms/UserIcon";
import { Box } from "components/atoms/Box";
import { Typography } from "components/atoms/Typography";
import { Spacer } from "components/atoms/Spacer";
import { FollowButton } from "components/organisms/FollowButton";
import { FaTwitter, FaLink } from "react-icons/fa";
import { redirectTo } from "utils/redirectTo";
import theme, { colorBlack } from "theme";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: theme.spacing(3),
      // TODO: material-uiのパレットで指定できるようにする
      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    },
    profile: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
    },
    snsWrap: {
      display: "flex",
    },
    userTextBox: {
      display: "flex",
    },
    userIcon: {
      width: 80,
      height: 80,
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
    pointer: {
      cursor: "pointer",
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
      <Box className={classes.snsWrap}>
        {/* TODO: 色を汎用化 */}
        <FaTwitter
          color="#1DA1F2"
          onClick={() => redirectTo("https://twitter.com/www_yotta")}
          className={classes.pointer}
        />
        <Spacer size={theme.spacing(3)} />
        <FaLink
          color="#4B4B4B"
          onClick={() => redirectTo("https://github.com/www-yotta")}
          className={classes.pointer}
        />
      </Box>
      <Box className={classes.profile}>
        <UserIcon src={avator} className={classes.userIcon} />
        <Spacer size={theme.spacing(2)} />
        <Typography className={classes.nameText}>{name}</Typography>
        <Box className={classes.userTextBox}>
          <Typography className={classes.followText}>
            {followCount} フォロー
          </Typography>
          <Spacer size={theme.spacing(5)} />
          <Typography className={classes.followText}>
            {followerCount} フォロワー
          </Typography>
        </Box>
      </Box>
      {/* TODO: 外からコンポーネントを入れる？入れないならこれはorganismsになる */}
      <FollowButton isFollow={false} />
    </Box>
  );
};
