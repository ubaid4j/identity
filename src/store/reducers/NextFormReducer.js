import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    form: null,
    isCompleted: false
}

const NextFormReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_FORM:
            return {...state, form: action.info}
        default:
            return state;
    }
}

export default NextFormReducer;
