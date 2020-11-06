import {ERROR} from 'store/actions/ActionTypes';
import {RemoveLoginError} from 'store/actions/LoginHandler';
import {RemoveSignUpError} from 'store/actions/SignUpHandler';
import {RemoveFormError} from 'store/actions/FormHandler';

const ErrorHandler = (isError, message) => {
    return dispatch => {
        if (!isError) {
            dispatch(RemoveLoginError());
            dispatch(RemoveSignUpError());
            dispatch(RemoveFormError());
        }
        dispatch(errorHandler(isError, message));
    }
}

const errorHandler = (isError, message) => {
    return {
        type: ERROR,
        isError: isError,
        message: message
    }
}
export default ErrorHandler;
