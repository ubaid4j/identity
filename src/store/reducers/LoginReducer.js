import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    isLogin: false,
    loginStart: false,
    loginError: false,
    username: null,
    token: null,
    id: null,
    entityId: null,
    formInfo: {
        formId: null,
        isFormCompleted: null,
        isFormTouched: null
    }
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {...state, isLogin: false, loginStart: true, loginError: false, formInfo: null}
        case actionTypes.LOGIN_SUCCESS:
            return {...state, isLogin: true, loginStart: false, loginError: false, username: action.username, token: action.token, id: action.id, entityId: action.entityId, formInfo: action.formInfo}
        case actionTypes.LOGIN_ERROR:
            return {...state, isLogin: false, loginStart: false, loginError: true, formInfo: null}
        case actionTypes.LOGOUT:
            return {...state, isLogin: false, loginStart: false, loginError: false, username: null, id: null, entityId: null, token: null, formInfo: null}
        case actionTypes.UPDATE_USER_INFO:
            return {...state, formInfo: action.formInfo}
        case actionTypes.REMOVE_LOGIN_ERROR:
            return {...state, loginError: false, loginStart: false}
        default:
            return state;
    }
}
export default LoginReducer;
