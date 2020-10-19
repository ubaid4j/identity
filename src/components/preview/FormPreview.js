import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(5),
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        textAlign: "left"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    }
}));


const FormPreview = ({form}) => {

    const classes = useStyles();

    return (
        <>
            {
                Object.keys(form).map(key => {
                    const subForm = form[key];
                    return (
                        <>
                            <h1>{key}</h1>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell width='20%'><strong>Field Name</strong></TableCell>
                                            <TableCell width='40%'><strong>Value</strong></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            Object.keys(subForm).map(key => {
                                                const field = subForm[key];
                                                return (
                                                    <TableRow key={field.label}>
                                                        <TableCell component="th" scope="row">
                                                            {field.label}
                                                        </TableCell>
                                                        <TableCell>{field.value}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>)
                })
            }
        </>

    );
}

export default FormPreview;
