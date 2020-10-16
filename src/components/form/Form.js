import React from "react";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import SelectInput from "../inputs/Select";
import Check from "../inputs/Check";

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
                    switch (field.type) {
                        case "text":
                            return (
                                <TextField
                                    error={field.validation.isTouched && !field.validation.isValid}
                                    disabled={field.disabled}
                                    hidden={field.hidden}
                                    key={field.id}
                                    required={field.validation.required}
                                    id={field.id}
                                    label={field.label}
                                    variant="outlined"
                                    value={field.value}
                                    onChange={(event) => handler(event, formType, "input")}/>
                            );
                        case "select":
                            return (
                                <SelectInput
                                    required={field.validation.required}
                                    disabled={field.disabled}
                                    value={field.value}
                                    label={field.label}
                                    id={field.id}
                                    options={field.options}
                                    formType={formType}
                                    handler={handler}
                                />
                            );
                        case "check":
                            return (
                                <Check
                                    handler={handler}
                                    formType={formType}
                                    id={field.id}
                                    label={field.label}
                                    value={field.value}
                                />
                            )
                        default:
                            return null;
                    }
                })
            }
        </form>
    );
}

export default Form;
