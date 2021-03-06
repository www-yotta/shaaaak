import { createMuiTheme } from "@material-ui/core/styles";

export const colorBlack = "#707070";

const theme = createMuiTheme({
  spacing: 4, // 4の倍数で余白を取る
  palette: {
    primary: {
      main: "#3F88F7",
    },
  },
});

export default theme;
