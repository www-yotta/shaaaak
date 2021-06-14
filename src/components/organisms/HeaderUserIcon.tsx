import React, { FC, useState } from "react";
import { UserIcon } from "components/atoms/UserIcon";
import { Menu } from "components/atoms/Menu";
import { MenuItem } from "components/atoms/MenuItem";

// type eventProps = {
//   currentTarget: boolean | ((prevState: boolean) => boolean);
// };

export type HeaderUserIconProps = {};
export const HeaderUserIcon: FC<HeaderUserIconProps> = () => {
  // TODO: 型定義をしっかりとする
  const [open, setOpen] = useState<any>(null);
  const handleClick = (event: any) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <UserIcon src="#" onClick={handleClick} />
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem>ユーザー編集</MenuItem>
        <MenuItem>ログアウト</MenuItem>
      </Menu>
    </div>
  );
};
