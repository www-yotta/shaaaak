import { FC, forwardRef } from "react";
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from "@material-ui/core";

// TODO: buttonの型定義がおかしいっぽいのでひとまずany
export type MenuItemProps = MuiMenuItemProps & { button?: any };

export const MenuItem: FC<MenuItemProps> = forwardRef((props, ref) => {
  return <MuiMenuItem ref={ref} {...props} />;
});
