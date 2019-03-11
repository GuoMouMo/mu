import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Other from './other/other';
// import routes from './route';

const app = document.getElementById("app");
ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Other} />
        </Switch>
    </BrowserRouter>,
    app
);