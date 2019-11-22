import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//
import LoginPages from './Pages/LoginPages';
import Register from './components/Register';
import Menu from './components/Menu';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={LoginPages} />
            <Route path="/menu" component={Menu} />
            <Route path="/register" component={Register} />
        </Switch>
    )
}

export default Routes;