import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../components/login/Login'
import Home from '../components/Home'
import Form from '../components/users/AddUser'
import User from '../components/users/Users'

const routing = (

    <Router>
        <Switch>
        <Route exact path = '/acceder' component = {Login}/>
            <Route exact path = '/' component = {Home} />
            <Route path = '/registrarme' component = {Form}/>
            <Route path = '/usuarios' component = {User}/>
        </Switch>
    </Router>
)

export default routing;