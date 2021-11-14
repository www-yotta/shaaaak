import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "components/pages/Top";
import Parts from "components/pages/Parts";
import { ThemeProvider } from "@material-ui/styles";
import theme from "theme";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Top} />
          <Route path="/parts/:id" component={Parts} />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
