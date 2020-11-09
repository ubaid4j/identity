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
            const token = localStorage.getItem('token');
            RequestResolver.put(`/identity/${id}.json?auth=${token}`, form)
                .then(() => {
                    updateUserInfo(id, form, user, dispatch);
                    dispatch(nextForm(form, id));
                })
                .catch(error => {
                    dispatch(ErrorHandler(true, error.response ? error.response.data.error.message : error.message))
                })

        } else {
            const token = localStorage.getItem('token');
            RequestResolver.post(`/identity.json?auth=${token}`, form)
                .then(response => {
                    updateUserInfo(response.data.name, form, user, dispatch);
                    dispatch(nextForm(form, response.data.name));
                })
                .catch(error => {
                    dispatch(ErrorHandler(true, error.response ? error.response.data.error.message : error.message))
                })
        }
    }
}

export const PopulateFormHandler = (formId) => {
    return dispatch => {
        const token = localStorage.getItem('token');
        RequestResolver.get(`/identity/${formId}.json?auth=${token}`)
            .then(response => {
                dispatch(populateForm(response.data, formId));
            })
            .catch(error => {
                dispatch(ErrorHandler(true, error.response ? error.response.data.error.message : error.message))
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
    const token = localStorage.getItem('token');
    RequestResolver.put(`/users/${user.entityId}.json?auth=${token}`, {
        userId: user.userId,
        username: user.username,
        formInfo: formInfo
    })
        .then(() => {
            dispatch(UpdateUserInfo(formInfo))
        }).catch(error => {
        dispatch(ErrorHandler(true, error.response.data ? error.response.data.error.message : error.message));
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
