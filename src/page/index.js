import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore';
import routes from './route';
import './index.scss';

const store = configureStore();
const app = document.getElementById("app");
ReactDom.render(
    <Provider store={store}>
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
        </BrowserRouter>
    </Provider>,
    app
);
