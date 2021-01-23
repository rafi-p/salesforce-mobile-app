import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {
  Login,
  CurrentIncentive,
  Home,
  LastIncentive,
  Learning,
  Rewards,
} from "./pages/index";
import store from "./store/index.js";
// import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Home />
        </Route>

        <Route path="/learning">
          <Learning />
        </Route>
        <Route exact path="/rewards">
          <Rewards />
        </Route>
        <Route path="/rewards/lastIncentive">
          <LastIncentive />
        </Route>
        <Route path="/rewards/currentIncentive">
          <CurrentIncentive />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
