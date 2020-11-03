import React, {useState} from "react";
import {Container} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import IDENTITY_FORM from "shared/forms/Forms";
import PreviewTable from "./components/PreviewTable";

const FormPreview = ({form}) => {

    const [identityForm,] = useState(IDENTITY_FORM);

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="sm">
                {
                    Object.keys(form).map(key => {
                        const subForm = form[key];
                        return (
                            <>
                                <PreviewTable identityForm={identityForm} id={key} subForm={subForm}/>
                            </>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default FormPreview;
