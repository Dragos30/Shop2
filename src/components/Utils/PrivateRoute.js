import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import { Router } from '@reach/router';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Router>
        <Route
            {...rest}
            render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
            />
        </Router>
    )
}

export default PrivateRoute;