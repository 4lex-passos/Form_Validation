import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/SignUp" component={SignUp} />
        </Switch>
    );
}
