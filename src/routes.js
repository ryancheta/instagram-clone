import React from "react";
import { Switch, Route, Router, useHistory } from "react-router-dom";
import Search from "./components/Search";
import { App as Home } from "../index";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

const Profile = () => {
  const history = useHistory();
  let GO_BACK = () => history.goBack();
  console.log(history);
  return (
    <>
      <button onClick={GO_BACK}>back</button>
      <h1>PROFILE PAGE!</h1>
    </>
  );
};

export default Routes;
