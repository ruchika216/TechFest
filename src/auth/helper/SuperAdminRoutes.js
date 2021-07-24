import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '.';

function SuperAdminRoutes({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() && isAuthenticated().user.role === 2 ? (

                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default SuperAdminRoutes
