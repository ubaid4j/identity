import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    UPDATE_USER_INFO,
    REMOVE_LOGIN_ERROR
} from 'store/actions/ActionTypes'

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
        case LOGIN_START:
            return {...state, isLogin: false, loginStart: true, loginError: false, formInfo: null}
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                loginStart: false,
                loginError: false,
                username: action.username,
                token: action.token,
                id: action.id,
                entityId: action.entityId,
                formInfo: action.formInfo
            }
        case LOGIN_ERROR:
            return {...state, isLogin: false, loginStart: false, loginError: true, formInfo: null}
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                loginStart: false,
                loginError: false,
                username: null,
                id: null,
                entityId: null,
                token: null,
                formInfo: null
            }
        case UPDATE_USER_INFO:
            return {...state, formInfo: action.formInfo}
        case REMOVE_LOGIN_ERROR:
            return {...state, loginError: false, loginStart: false}
        default:
            return state;
    }
}
export default LoginReducer;
