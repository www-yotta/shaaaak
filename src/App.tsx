import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "components/pages/Top";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Top} />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
