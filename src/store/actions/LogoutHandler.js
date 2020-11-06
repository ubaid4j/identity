import {REMOVE_FORM, LOGOUT} from 'store/actions/ActionTypes'

const LogoutHandler = () => {
    return dispatch => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        setTimeout(() => {
            dispatch(removeForm());
            dispatch(logoutHandler())
        }, 2000);
    }
}

const logoutHandler = () => {
    return {
        type: LOGOUT
    }
}

const removeForm = () => {
    return {
        type: REMOVE_FORM
    }
}

export default LogoutHandler;
