import React from "react";
import "./../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          {/* Home should only show when path is exactly "/" */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
