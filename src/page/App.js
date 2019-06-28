import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './route';

const App = () => (
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
);
export default App;
