import RequestResolver from "../../requestHandler/RequestHandler";
import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const signup = (userData) => {
    return dispatch => {
        dispatch(SignUpStart())
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw`, userData)
            .then(response => {
                console.log(response);
                RequestResolver.post('/users.json', {username: userData.firstName + ' ' + userData.lastName, userId: response.data.localId})
                    .then(() => {
                        dispatch(storeToken(response.data.idToken, response.data.expiresIn, response.data.localId))
                        dispatch(SignUpFinished({...response.data, username: userData.firstName + ' ' + userData.lastName}))
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch(ErrorInSignup(error.message));
                    })
            })
            .catch(error => {
                console.log(error);
                dispatch(ErrorInSignup(error.message));
            })
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
        type: actionTypes.SET_TIMEOUT,
        timeout: timeout
    }
}


export const SignUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START,
        payload: null
    }
}

export const SignUpFinished = (data) => {
    return {
        type: actionTypes.SIGNUP_FINISHED,
        payload: data
    }
}

export const ErrorInSignup = (error) => {
    return {
        type: actionTypes.SIGNUP_ERROR,
        payload: null,
        error: error
    }
}
