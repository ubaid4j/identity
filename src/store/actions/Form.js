import * as actionTypes from './ActionTypes'
import RequestResolver from "../../requestHandler/RequestHandler";
import {UpdateUserInfo} from "./Login";

const _updateUserInfo = (formId, form, user, dispatch) => {
    const formInfo = {formId: formId, isFormCompleted: form.isFormCompleted, isFormTouched: true}
    RequestResolver.put(`/users/${user.entityId}.json`, {
        userId: user.userId,
        username: user.username,
        formInfo: formInfo
    })
        .then(() => {
            dispatch(UpdateUserInfo(formInfo))
        }).catch(error => {
        console.log(error);
    })
}

export const updateForm = (form, id, user) => {
    return dispatch => {
        if (id) {
            dispatch(formUpdating())
            RequestResolver.put(`/identity/${id}.json`, form)
                .then(() => {
                    _updateUserInfo(id, form, user, dispatch);
                    dispatch(nextForm(form, id));
                })
                .catch(error => {
                    console.log(error);
                })

        } else {
            RequestResolver.post("/identity.json", form)
                .then(response => {
                    _updateUserInfo(response.data.name, form, user, dispatch);
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

export const formUpdating = () => {
    return {
        type: actionTypes.FORM_UPDATING,
    }
}

export const PopulateFormHandler = (formId) => {
    return dispatch => {
        RequestResolver.get(`/identity/${formId}.json`)
            .then(response => {
                dispatch(PopulateForm(response.data, formId));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const PopulateForm = (form, formId) => {
    return {
        type: actionTypes.POPULATE_FORM,
        form: form,
        formId: formId,
        isCompleted: form.isFormCompleted
    }
}
