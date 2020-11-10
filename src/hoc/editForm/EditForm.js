import React from 'react';
import Forms from 'containers/Forms/Forms';

const EditForm = (props) => {
    return <Forms isEdit={true} {...props}/>;
}
export default EditForm;
