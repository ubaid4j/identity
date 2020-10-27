import React, {createContext} from "react";
import {useSelector} from "react-redux";

const defaultValue = {
    username: null,
    userId: null,
    isLogin: false,
    entityId: null
}

export const UserContext = createContext(defaultValue);

const UserProvider = (props) => {

    const username = useSelector(state => state.login.username);
    const userId = useSelector(state => state.login.id);
    const isLogin = useSelector(state => state.login.isLogin);
    const entityId = useSelector(state => state.login.entityId);

    const newUser = {
        username: username,
        userId: userId,
        isLogin: isLogin,
        entityId: entityId
    }

    return (
        <UserContext.Provider value={newUser}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;
