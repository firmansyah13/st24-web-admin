import React, { useContext, memo } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Dashboard";
import history from "./helper/history";
import { Route, Router, Switch } from "react-router-dom";
import { AuthContext } from "./context";

const RouterApp = memo(() => {
  const auth = useContext(AuthContext);

  const PrivateRoute = ({ component, ...props }) => {
    const renderedPage = auth.isLogin ? component : Login;
    return <Route {...props} component={renderedPage} />;
  };

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="" />
        {/* <PrivateRoute exact path="/product" component={Product} /> */}
      </Switch>
    </Router>
  );
});

export default RouterApp;