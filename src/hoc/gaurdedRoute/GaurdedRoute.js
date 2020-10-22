import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {UserContext} from "../../providers/UserProvider";

const GuardedRoute = ({component: Component, ...rest}) => {
    const user = useContext(UserContext);

    console.log("GaurdedRoute.js executing: user ----> ", user);

    return (
        <Route {...rest} render={(props) => (
            user.isLogin === true
                ? <Component {...props} />
                : <Redirect to='/identity'/>
        )}/>
    )
}

export default GuardedRoute;
