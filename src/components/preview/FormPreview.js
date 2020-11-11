import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IDENTITY_FORM from 'shared/forms/Forms';
import PreviewTable from 'components/preview/tables/PreviewTable';

const FormPreview = ({form}) => {
    const [identityForm,] = useState(IDENTITY_FORM);
    const isObject = (subForm) => {
        return typeof subForm === 'object';
    }
    return (
        <>
            <CssBaseline/>
            <Container maxWidth='sm'>
                {
                    Object.keys(form).map(key => isObject(form[key]) ?
                        <PreviewTable key={key} identityForm={identityForm} id={key} subForm={form[key]}/> :
                    null)
                }
            </Container>
        </>
    );
}
export default FormPreview;

FormPreview.propTypes = {
    form: PropTypes.object
}
