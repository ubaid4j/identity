import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    formId: null,
    form: null,
    isCompleted: false,
    error: null,
    isUpdating: false
}

const NextFormReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.NEXT_FORM:
            return {...state, form: action.info, formId: action.formId, isUpdating: false}
        case actionTypes.HALT_FORM:
            return {...state, error: action.error}
        case actionTypes.FORM_UPDATING:
            return {...state, isUpdating: true}
        case actionTypes.POPULATE_FORM:
            return {...state, form: action.form, formId: action.formId, isCompleted: action.isCompleted}
        default:
            return state;
    }
}

export default NextFormReducer;
