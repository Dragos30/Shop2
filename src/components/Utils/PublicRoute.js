import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import { Router } from '@reach/router';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
    return (
        <Router>
        <Route
            {...rest}
            render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
            />
        </Router>
    )
}

export default PublicRoute;