import * as actionTypes from './ActionTypes'
import RequestResolver from "../../requestHandler/RequestHandler";

export const updateForm = (form, id) => {
    return dispatch => {
        if (id) {
            dispatch(formUpdating())
            RequestResolver.put(`/identity/${id}.json`, form)
                .then(response => {
                    console.log(response);
                    dispatch(nextForm(form, id));
                })
                .catch(error => {
                    console.log(error);
                })

        } else {
            RequestResolver.post("/identity.json", form)
                .then(response => {
                    console.log(response);
                    dispatch(nextForm(form, response.data.name));
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}

export const nextForm = (info, id) => {
    return {
        type: actionTypes.NEXT_FORM,
        info: info,
        formId: id
    }
}

export const haltForm = (error) => {
    return {
        type: actionTypes.HALT_FORM,
        info: null,
        error: error
    }
}

export const formUpdating = () => {
    return {
        type: actionTypes.FORM_UPDATING,
    }
}
