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


const Form = ({form, handler, formType}) => {
    const classes = useStyles();

    const fields = Object.keys(form).map(key => {
        form[key]['id'] = key
        return form[key];
    });

    return (
        <form className={classes.root}>
            {
                fields.map(field => {
                    return (
                        <TextField key={field.id} required={field.required} id={field.id} label={field.label} variant="outlined" value={field.value} onChange={(event) => handler(event, formType)}/>
                    );
                })
            }
        </form>
    );
}

export default Form;
