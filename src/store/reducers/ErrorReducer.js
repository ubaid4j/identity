import {ERROR} from 'store/actions/ActionTypes';

const initialState = {
    isError: false,
    message: ''
}

const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR:
            return {...state, isError: action.isError, message: action.message};
        default:
            return state;
    }
}
export default ErrorReducer;
