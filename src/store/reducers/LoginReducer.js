import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    isLogin: false,
    loginStart: false,
    loginError: false,
    username: null,
    token: null,
    id: null
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {...state, isLogin: false, loginStart: true, loginError: false}
        case actionTypes.LOGIN_SUCCESS:
            console.log(action);
            return {...state, isLogin: true, loginStart: false, loginError: false, username: action.username, token: action.token, id: action.id}
        case actionTypes.LOGIN_ERROR:
            return {...state, isLogin: false, loginStart: false, loginError: true}
        case actionTypes.LOGOUT:
            return {...state, isLogin: false, loginStart: false, loginError: false, username: null, token: null}
        default:
            return state;
    }
}
export default LoginReducer;
