import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

function render(routes, path = '') {
  if (Object.prototype.toString.call(routes) === '[object Array]') {
    return routes.map((route, i) => {
      path = `${path}${route.path}`
      return route.component ? (
        <Route
          key={i}
          exact={route.exact}
          path={path}
          component={props => {
            return (
              <route.component {...props}>
                {
                  route.routes
                  && render(route.routes, path)
                }
              </route.component>
            );
          }}
          />
      ) : (
        <Route key={i} exact={route.exact} path={path}>
          {render(route.routes, path)}
        </Route>
      );
    }); 
  }
};

const App = () => (
  <Switch>
    {
      render(routes)
    }
  </Switch>
);
export default App;
