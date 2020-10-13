import * as actionTypes from './ActionTypes'

export const nextForm = (info) => {
    return {
        type: actionTypes.NEXT_FORM,
        info: info,
    }
}
