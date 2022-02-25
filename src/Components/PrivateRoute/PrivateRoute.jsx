import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../Context/UserContext';

export default function PrivateRoute({ children, routeProps }) {
  let user = useUser();

  return (
    <div>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/register',
                state: {
                  from: location,
                },
              }}
            />
          )
        }
      />
    </div>
  );
}
