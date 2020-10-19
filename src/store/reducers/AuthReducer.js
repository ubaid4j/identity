import * as actionTypes from '../actions/ActionTypes'

const initialState = {
  user: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            //do login
        case actionTypes.LOGOUT:
            // do logout
        default:
            return state;
    }
}

export default AuthReducer;
