import RequestResolver from "../../requestHandler/RequestHandler";
import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const signup = (userData) => {
    return dispatch => {
        dispatch(SignUpStart())
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw`, userData)
            .then(response => {
                console.log(response);
                dispatch(storeToken(response.data.idToken, response.data.expiresIn))
                RequestResolver.post('/users.json', {username: userData.firstName + ' ' + userData.lastName, userId: response.data.localId})
                    .then(() => {
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

const storeToken = (token, expiryTime) => {
    localStorage.setItem('token', token);
    const timeout = setTimeout(() => {
        localStorage.removeItem('token');
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
