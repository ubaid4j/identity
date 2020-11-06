import {
    SIGNUP_START,
    SIGNUP_FINISHED,
    SIGNUP_ERROR,
    SET_TIMEOUT,
    REMOVE_SIGNUP_ERROR
} from 'store/actions/ActionTypes'

const initialState = {
    user: null,
    isLogin: false,
    isError: false,
    error: '',
    isSignUpLoading: false,
    timeout: null
};
const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_START:
            return {...state, isLogin: false, isError: false, isSignUpLoading: true};
        case SIGNUP_FINISHED:
            return {...state, user: {...action.payload}, isLogin: true, isSignUpLoading: false}
        case SIGNUP_ERROR:
            return {...state, user: null, isError: true, isLogin: false, isSignUpLoading: false, error: action.error}
        case SET_TIMEOUT:
            return {...state, timeout: action.timeout}
        case REMOVE_SIGNUP_ERROR:
            return {...state, error: false, isSignUpLoading: false}
        default:
            return state;
    }
}
export default SignupReducer;
