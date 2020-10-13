import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
}));


const PersonalInfoForm = () => {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <TextField required id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
            <TextField required id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField required id="outlined-basic" label="Age" variant="outlined" />
            <TextField required id="outlined-basic" label="Mobile Number" variant="outlined" />
        </form>
    );
}

export default PersonalInfoForm;
