import * as actionTypes from '../actions/ActionTypes';
import {RemoveLoginError} from "./Login";

const ErrorHandler = (isError, message) => {
    return dispatch => {
        if (!isError) {
            dispatch(RemoveLoginError());
        }
        dispatch(_ErrorHandler(isError, message));
    }
}

const _ErrorHandler = (isError, message) => {
    return {
        type: actionTypes.ERROR,
        isError: isError,
        message: message
    }
}

export default ErrorHandler;
