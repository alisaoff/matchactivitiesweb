import React from 'react';
import{ Switch, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Home from './pages/Home/index';
import Inicial from './pages/Inicial/index';
import Products from './pages/Products/index';
import Reports from './pages/Reports/index';

export default () => {

    return(
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/inicial">
                    <Inicial/>
                </Route>
                <Route exact path="/inicial">
                    <Inicial/>
                </Route>
                <Route exact path="/reports">
                    <Inicial/>
                </Route>
            </Switch>
    );
}