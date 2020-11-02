import axios from 'axios'
import * as actionTypes from './ActionTypes'
import RequestResolver from "../../requestHandler/RequestHandler";
import {PopulateFormHandler} from "./Form";
import ErrorHandler from "./Error";

function _handleUserResponse(response, dispatch, token) {
    const [entityId] = Object.keys(response.data);
    const [infoObject] = Object.keys(response.data).map(key => response.data[key]);
    dispatch(LoginSuccess(infoObject.username, token, infoObject.userId, entityId, infoObject.formInfo));
    const formId = infoObject.formInfo ? infoObject.formInfo.formId : null;
    if (formId) {
        dispatch(PopulateFormHandler(formId))
    }
}

export const LoginHandler = (username, password) => {
    return dispatch => {
        dispatch(LoginStart())
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw`, {
            "email": username,
            "password": password
        })
            .then(response => {
                const token = response.data.idToken;
                const userId = response.data.localId;
                const expiryTime = response.data.expiresIn;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('expiryTime', expiryTime);
                RequestResolver.get(`users.json?orderBy="userId"&equalTo="${response.data.localId}"`)
                    .then(response => _handleUserResponse(response, dispatch, token))
                    .catch(error => {
                        dispatch(ErrorHandler(true, error.message))
                    });
            })
            .catch(error => {
                dispatch(ErrorHandler(true, error.response.data.error.message))
            });
    }
}

export const TryLoginHandler = () => {
    return dispatch => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        if (userId && token) {
            RequestResolver.get(`users.json?orderBy="userId"&equalTo="${userId}"`)
                .then(response => _handleUserResponse(response, dispatch, token))
                .catch(error => {
                    dispatch(ErrorHandler(true, error.response.data.error.message));
                });
        }
    }
}

const LoginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

const LoginSuccess = (username, token, id, entityId, formInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        username: username,
        token: token,
        id: id,
        entityId: entityId,
        formInfo: formInfo
    }
}

export const UpdateUserInfo = (formInfo) => {
    return {
        type: actionTypes.UPDATE_USER_INFO,
        formInfo: formInfo
    }
}

export const RemoveLoginError = () => {
    return {
        type: actionTypes.REMOVE_LOGIN_ERROR
    }
}

