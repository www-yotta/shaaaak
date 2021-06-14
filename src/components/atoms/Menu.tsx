import { FC, forwardRef } from "react";
import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@material-ui/core";

export type MenuProps = MuiMenuProps & {};

export const Menu: FC<MenuProps> = forwardRef((props, ref) => {
  return <MuiMenu ref={ref} {...props} />;
});
