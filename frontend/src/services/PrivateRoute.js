import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({children, ...rest }) => {

    // A modifier par la suite
    const isAuthenticated  = true;

    return (
        <Route
          {...rest}
          render={
            ({ location }) => (
              isAuthenticated
                ? (
                  children
                ) : (
                  <Redirect
                    to={{
                      pathname: '/administration',
                      state: { from: location }
                    }}
                  />
                ))
          }
        />
      );
};

export default PrivateRoute;