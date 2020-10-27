import axios from 'axios'
import * as actionTypes from './ActionTypes'
import RequestResolver from "../../requestHandler/RequestHandler";
import {PopulateFormHandler} from "./Form";

export const LoginHandler = (username, password) => {
    return dispatch => {
        dispatch(LoginStart())
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw`, {"email": username, "password": password})
            .then(response => {
                const token = response.data.idToken;
                const userId = response.data.localId;
                const expiryTime = response.data.expiresIn;
                localStorage.setItem('token', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('expiryTime', expiryTime);
                RequestResolver.get(`users.json?orderBy="userId"&equalTo="${response.data.localId}"`)
                    .then(response => {
                        const [entityId] = Object.keys(response.data);
                        const [infoObject] = Object.keys(response.data).map(key => response.data[key]);
                        dispatch(LoginSuccess(infoObject.username, token, infoObject.userId, entityId, infoObject.formInfo));
                    }).catch(error => {
                        console.log(error);
                        console.log(error);
                });
            })
            .catch(error => {
                dispatch(LoginError())
                console.log(error);
            });
    }
}

export const TryLoginHandler = () => {
    return dispatch => {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        if (userId && token) {
            RequestResolver.get(`users.json?orderBy="userId"&equalTo="${userId}"`)
                .then(response => {
                    const [entityId] = Object.keys(response.data);
                    const [infoObject] = Object.keys(response.data).map(key => response.data[key]);
                    dispatch(LoginSuccess(infoObject.username, token, infoObject.userId, entityId, infoObject.formInfo));
                    const formId = infoObject.formInfo.formId;
                    if (formId) {
                        dispatch(PopulateFormHandler(formId))
                    }
                }).catch(error => {
                console.log(error);
                dispatch(LoginError());
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

const LoginError = () => {
    return {
        type: actionTypes.LOGIN_ERROR,
    }
}

