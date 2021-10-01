import {
    Route,
    Redirect
  } from 'react-router-dom';

  import { isAuthenticated } from '../../services/auth';
  
  function PrivateRoute({ children, ...rest }) {

    const isAuthenticatedUser = isAuthenticated();
    console.log(isAuthenticatedUser)
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticatedUser
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
  }
  
  export default PrivateRoute;