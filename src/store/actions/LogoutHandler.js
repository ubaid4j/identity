import * as actionTypes from '../actions/ActionTypes';

const LogoutHandler = () => {
    return dispatch => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setTimeout(() => {
            dispatch(_removeForm());
            dispatch(_logoutHandler())
        }, 2000);
    }

}

const _logoutHandler = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

const _removeForm = () => {
    return {
        type: actionTypes.REMOVE_FORM
    }
}

export default LogoutHandler;
