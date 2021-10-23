import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch> */}
          <Route path="/housing-test">
            {/* <About /> */}
            <div>Mere</div>
          </Route>
          <Route path="/quizze">
            {/* <Users /> */}
            <div>Pere</div>
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <div>Banana</div>
          </Route>
        {/* </Switch> */}
    </Router>
  );
}