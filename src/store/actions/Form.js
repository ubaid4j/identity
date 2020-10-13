import * as actionTypes from './ActionTypes'

export const nextForm = (info, formType) => {
    return {
        type: actionTypes.NEXT_FORM,
        info: info,
        formType: formType
    }
}
