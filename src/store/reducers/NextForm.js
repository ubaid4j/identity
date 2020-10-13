import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    personalInfo: null,
    educationalInfo: null,
    professionalInfo: null,
    exciseInfo: null,
    residentInfo: null,
    isPreview: false,
}

const NextFormReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.NEXT_FORM:
            return {...initialState, [action.formType]:action.info}
        default:
            return new Error();
    }
}

export default NextFormReducer;
