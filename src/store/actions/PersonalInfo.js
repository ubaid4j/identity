import * as actionTypes from './ActionTypes'

export const PersonalInfoSubmit = (info) => {
    return {
        type: actionTypes.NEXT_FORM,
        info: info,
    }
}

export default PersonalInfoSubmit;
