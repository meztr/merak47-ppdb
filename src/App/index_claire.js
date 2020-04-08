import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./clairechabas/Main";
import Login from "./clairechabas/Login";
import Bunny from "./clairechabas/Bunny";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bunny" component={Bunny} />
      </Switch>
    </div>
  );
};

export default App;
