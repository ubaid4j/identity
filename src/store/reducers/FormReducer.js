import {
    NEXT_FORM,
    REMOVE_FORM,
    FORM_UPDATING,
    POPULATE_FORM,
    REMOVE_FORM_ERROR
} from 'store/actions/ActionTypes'

const initialState = {
    formId: null,
    form: null,
    isCompleted: false,
    error: null,
    isUpdating: false
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_FORM:
            return {...state, form: action.info, formId: action.formId, isUpdating: false}
        case REMOVE_FORM:
            return {...state, formId: null, form: null, isCompleted: false, error: null, isUpdating: false}
        case FORM_UPDATING:
            return {...state, isUpdating: true}
        case POPULATE_FORM:
            return {...state, form: action.form, formId: action.formId, isCompleted: action.isCompleted}
        case REMOVE_FORM_ERROR:
            return {...state, error: null}
        default:
            return state;
    }
}
export default FormReducer;
