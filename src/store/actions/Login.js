import axios from 'axios'
import * as actionTypes from './ActionTypes'
import RequestResolver from "../../requestHandler/RequestHandler";

export const LoginHandler = (username, password) => {
    return dispatch => {
        dispatch(LoginStart())
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU_vVv_YXI-3RAqIfCYeRYmhqke8Uv7xw`, {"email": username, "password": password})
            .then(response => {
                console.log(response);
                const token = response.data.idToken;
                RequestResolver.get(`users.json?orderBy="userId"&equalTo="${response.data.localId}"`)
                    .then(response => {
                        console.log(response);
                        const [infoObject] = Object.keys(response.data).map(key => response.data[key]);
                        console.log(infoObject);
                        dispatch(LoginSuccess(infoObject.username, token, infoObject.userId));
                    });
            })
            .catch(error => {
                dispatch(LoginError())
                console.log(error);
            });
    }
}

const LoginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

const LoginSuccess = (username, token, id) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        username: username,
        token: token,
        id: id
    }
}

const LoginError = () => {
    return {
        type: actionTypes.LOGIN_ERROR,
    }
}
