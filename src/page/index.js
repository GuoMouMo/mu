import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './route';
import './index.scss';

const app = document.getElementById("app");
ReactDom.render(
    <BrowserRouter>
        <Switch>
            {
                routes.map((route, i) => (
                    <Route
                        key={i}
                        exact
                        path={route.path}
                        component={route.component}
                        />
                ))
            }
        </Switch>
    </BrowserRouter>,
    app
);