import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl} from "@material-ui/core";
import SelectInput from "../inputs/Select";

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
                                // <FormControl
                                //     required={field.validation.required}
                                //     variant="outlined"
                                //     className={classes.formControl}
                                //     key={field.id}
                                //     disabled={field.disabled}
                                // >
                                //     <InputLabel id={field.id}>{field.label}</InputLabel>
                                //     <Select
                                //         labelId={field.id}
                                //         key={field.id}
                                //         id={field.id}
                                //         name={field.id}
                                //         value={field.value}
                                //         label={field.label}
                                //         onChange={(event) => handler(event, formType, "input")}
                                //     >
                                //         <MenuItem key={"none"} aria-label="None" value="">None</MenuItem>
                                //         {
                                //             field.options.map(option => {
                                //                 return <MenuItem key={option} value={option}>{option}</MenuItem>
                                //             })
                                //         }
                                //     </Select>
                                // </FormControl>
                            );
                        case "check":
                            return (
                                <FormControlLabel
                                    key={field.id}
                                    label={field.label}
                                    labelPlacement={"end"}
                                    control={
                                        <Checkbox
                                            key={field.id}
                                            value={field.value}
                                            checked={field.value}
                                            onChange={event => handler(event, formType, "check")}
                                            id={field.id}
                                        />
                                    }
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
