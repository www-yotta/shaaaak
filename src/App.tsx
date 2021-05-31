import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Top from "components/pages/Top";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Top} />
      </Router>
    </div>
  );
};

export default App;
