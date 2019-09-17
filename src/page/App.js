import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './route';

function render(routes) {
  return routes.map((route, i) => (
    <Route
      key={i}
      exact={route.exact}
      path={route.path}
      component={props => {
        return (
          <route.component {...props}>
            {
              route.routes
              && render(route.routes)
            }
          </route.component>
        );
      }}
      />
  ))
};

const App = () => (
  <Switch>
    {
      render(routes)
    }
  </Switch>
);
export default App;
