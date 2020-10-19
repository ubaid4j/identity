import React, {createContext} from "react";
import {useSelector} from "react-redux";

export const UserContext = createContext({user: null});

const UserProvider = (props) => {

    const user = useSelector(state => state.auth.user);

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
