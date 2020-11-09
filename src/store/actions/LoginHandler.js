import {
    UPDATE_USER_INFO,
    REMOVE_LOGIN_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS
} from 'store/actions/ActionTypes'
import RequestResolver from 'requestHandler/RequestHandler';
import {PopulateFormHandler} from 'store/actions/FormHandler';
import ErrorHandler from 'store/actions/ErrorHandler';
import AuthHandler from 'requestHandler/AuthHandler';

export const LoginHandler = (username, password) => {
    return dispatch => {
        dispatch(loginStart())
        AuthHandler.post('accounts:signInWithPassword', {
            'email': username,
            'password': password
        }).then(response => {
            setInfoInLocalStorage(response);
            const token = response.data.idToken;
            RequestResolver.get(`users.json?auth=${token}&orderBy="userId"&equalTo="${response.data.localId}"`)
                .then(response => handleUserResponse(response, dispatch, response.data.idToken))
                .catch(error => dispatch(ErrorHandler(true, error.message)));
        }).catch(error => dispatch(ErrorHandler(true, error.response.data.error.message)));
    }
}

export const TryLoginHandler = () => {
    return dispatch => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        if (userId && token) {
            RequestResolver.get(`users.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
                .then(response => handleUserResponse(response, dispatch, token))
                .catch(error => dispatch(ErrorHandler(true, error.response.data.error.message)));
        }
    }
}

export const UpdateUserInfo = (formInfo) => {
    return {
        type: UPDATE_USER_INFO,
        formInfo: formInfo
    }
}

export const RemoveLoginError = () => {
    return {
        type: REMOVE_LOGIN_ERROR
    }
}


const loginStart = () => {
    return {
        type: LOGIN_START
    }
}

const setInfoInLocalStorage = (response) => {
    const token = response.data.idToken;
    const userId = response.data.localId;
    const expiryTime = response.data.expiresIn;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expiryTime', expiryTime);
}

const handleUserResponse = (response, dispatch, token) => {
    const [entityId] = Object.keys(response.data);
    const [infoObject] = Object.keys(response.data).map(key => response.data[key]);
    dispatch(loginSuccess(infoObject.username, token, infoObject.userId, entityId, infoObject.formInfo));
    const formId = infoObject.formInfo ? infoObject.formInfo.formId : null;
    if (formId) {
        dispatch(PopulateFormHandler(formId))
    }
}

const loginSuccess = (username, token, id, entityId, formInfo) => {
    return {
        type: LOGIN_SUCCESS,
        username: username,
        token: token,
        id: id,
        entityId: entityId,
        formInfo: formInfo
    }
}
