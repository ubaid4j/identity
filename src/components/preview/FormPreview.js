import React, {useState} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import IDENTITY_FORM from "../../shared/forms/Forms";


const FormPreview = ({form}) => {

    const [identityForm, ] = useState(IDENTITY_FORM);

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="sm">
                {
                    Object.keys(form).map(key => {
                        const subForm = form[key];
                        return (
                            <>
                                <h1>{key.replace("_", " ")}</h1>
                                <Grid container>
                                    {
                                        Object.keys(subForm).map(subKey => {
                                            return (
                                                <>
                                                    <Grid container spacing={4} alignItems="center">
                                                        <Grid item style={{flexGrow: 1}}>
                                                            <Typography>
                                                                {identityForm[key][subKey] ? identityForm[key][subKey].label : null}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item style={{flexGrow: 1}}>
                                                            {form[key][subKey]}
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                </Grid>
                            </>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default FormPreview;
