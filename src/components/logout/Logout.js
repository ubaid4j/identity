import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LogoutHandler from "store/actions/LogoutHandler";

const Logout = (props) => {
    const dispatch = useDispatch();
    const logout = useCallback(() => dispatch(LogoutHandler()), [dispatch]);

    const userId = useSelector(state => state.login.id);

    useEffect(() => {
        logout();
        if (!userId) {
            props.location.pathname = "/identity"
        }
    });

    return (
        <p>You will be redirect to Introduction Page</p>
    );
}
export default Logout;
