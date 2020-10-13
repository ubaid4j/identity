import * as actionTypes from '../actions/ActionTypes';

const personalInfo = {

}

const PersonalInfoReducer = (state = personalInfo, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_PERSONAL_INFO:
            return {...state, ...action.info}
        default:
            return state;

    }
}

export default PersonalInfoReducer;
