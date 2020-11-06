import {
    SET_TIMEOUT,
    SIGNUP_START,
    SIGNUP_FINISHED,
    REMOVE_SIGNUP_ERROR
} from 'store/actions/ActionTypes';
import RequestResolver from 'requestHandler/RequestHandler';
import ErrorHandler from 'store/actions/ErrorHandler';
import AuthHandler from 'requestHandler/AuthHandler';

export const SignUpHandler = (userData) => {
    return dispatch => {
        dispatch(signUpStart())
        AuthHandler.post('accounts:signUp', userData)
            .then(response => {
                RequestResolver.post('/users.json', {
                    username: userData.firstName + ' ' + userData.lastName,
                    userId: response.data.localId
                })
                    .then(() => {
                        dispatch(storeToken(response.data.idToken, response.data.expiresIn, response.data.localId))
                        dispatch(signUpFinished({
                            ...response.data,
                            username: userData.firstName + ' ' + userData.lastName
                        }))
                    })
                    .catch(error => {
                        dispatch(ErrorHandler(true, error.response.data.error.message))
                    })
            })
            .catch(error => {
                dispatch(ErrorHandler(true, error.response.data.error.message))
            })
    }
}

export const RemoveSignUpError = () => {
    return {
        type: REMOVE_SIGNUP_ERROR
    }
}

const storeToken = (token, expiryTime, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiryTime', expiryTime);
    const timeout = setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expiryTime');
    }, expiryTime * 1000);
    return {
        type: SET_TIMEOUT,
        timeout: timeout
    }
}


const signUpStart = () => {
    return {
        type: SIGNUP_START,
        payload: null
    }
}

const signUpFinished = (data) => {
    return {
        type: SIGNUP_FINISHED,
        payload: data
    }
}
