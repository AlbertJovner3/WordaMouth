import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/routes/home";
import Places from "./Components/routes/Places";
import Place from "./Components/routes/Place";
import Signin from "./Components/routes/Signin";


const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/places' exact component={Places} />
            <Route path='/place' exact component={Place} />
          </>
        ) : (
          <Route exact path="/">
            <Signin />
          </Route>
        )}
      </Switch>
    </Router>  
  );
};
export default AppRouter;