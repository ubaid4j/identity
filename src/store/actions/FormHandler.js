import {
    REMOVE_FORM_ERROR,
    NEXT_FORM,
    FORM_UPDATING,
    POPULATE_FORM
} from 'store/actions/ActionTypes'
import RequestResolver from 'requestHandler/RequestHandler';
import {UpdateUserInfo} from 'store/actions/LoginHandler';
import ErrorHandler from 'store/actions/ErrorHandler';

export const UpdateForm = (form, id, user) => {
    return dispatch => {
        if (id) {
            dispatch(formUpdating())
            RequestResolver.put(`/identity/${id}.json`, form)
                .then(() => {
                    updateUserInfo(id, form, user, dispatch);
                    dispatch(nextForm(form, id));
                })
                .catch(error => {
                    dispatch(ErrorHandler(true, error.response.data.error.message))
                })

        } else {
            RequestResolver.post('/identity.json', form)
                .then(response => {
                    updateUserInfo(response.data.name, form, user, dispatch);
                    dispatch(nextForm(form, response.data.name));
                })
                .catch(error => {
                    dispatch(ErrorHandler(true, error.response.data.error.message))
                })
        }
    }
}

export const PopulateFormHandler = (formId) => {
    return dispatch => {
        RequestResolver.get(`/identity/${formId}.json`)
            .then(response => {
                dispatch(populateForm(response.data, formId));
            })
            .catch(error => {
                dispatch(ErrorHandler(true, error.response.data.error.message))
            })
    }
}

export const RemoveFormError = () => {
    return {
        type: REMOVE_FORM_ERROR
    }
}

const updateUserInfo = (formId, form, user, dispatch) => {
    const formInfo = {formId: formId, isFormCompleted: form.isFormCompleted, isFormTouched: true}
    RequestResolver.put(`/users/${user.entityId}.json`, {
        userId: user.userId,
        username: user.username,
        formInfo: formInfo
    })
        .then(() => {
            dispatch(UpdateUserInfo(formInfo))
        }).catch(error => {
        dispatch(ErrorHandler(true, error.response.data.error.message));
    })
}

const nextForm = (info, id) => {
    return {
        type: NEXT_FORM,
        info: info,
        formId: id
    }
}

const formUpdating = () => {
    return {
        type: FORM_UPDATING,
    }
}

const populateForm = (form, formId) => {
    return {
        type: POPULATE_FORM,
        form: form,
        formId: formId,
        isCompleted: form.isFormCompleted
    }
}
