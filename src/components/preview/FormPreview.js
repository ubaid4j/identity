import React, {useState} from "react";
import {Container, Grid, Typography} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import IDENTITY_FORM from "../../shared/forms/Forms";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell colSpan={2} style={{textAlign: "center"}}>
                                                <Typography variant="h5" style={{fontWeight: "bold"}}>
                                                    {key !== 'isFormCompleted' ? key.replace("_", " ") : null}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Object.keys(subForm).map(subKey => {
                                            let view;
                                            subKey !== 'isCompleted' ?
                                                view = (
                                                    <TableRow key={subForm.name}>
                                                        <TableCell component="th" scope="row">
                                                            {identityForm[key][subKey] ? identityForm[key][subKey].label : null}
                                                        </TableCell>
                                                        <TableCell
                                                            align="right">{form[key][subKey] ? form[key][subKey] : null}
                                                        </TableCell>
                                                    </TableRow>
                                                ) :
                                                view = null;
                                            return view;
                                        })}
                                    </TableBody>
                                </Table>
                            </>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default FormPreview;
