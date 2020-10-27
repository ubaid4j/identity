import * as actionTypes from '../actions/ActionTypes';

const LogoutHandler = () => {
    return dispatch => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setTimeout(() => {
            dispatch(_logoutHandler())
        }, 2000);
    }

}

const _logoutHandler = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export default LogoutHandler;
