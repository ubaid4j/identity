import React from 'react';
import {FormControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        textAlign: 'left'
    }
}));

const SelectInput = ({formType, field, handler}) => {
    const classes = useStyles();
    return (
        <FormControl
            required={field.validation.required}
            variant='outlined'
            className={classes.formControl}
            key={field.id}
            disabled={field.disabled}
        >
            <InputLabel id={field.id}>{field.label}</InputLabel>
            <Select
                error={field.validation.isTouched && !field.validation.isValid}
                required={field.required}
                native
                labelId={field.id}
                key={field.id}
                id={field.id}
                name={field.id}
                value={field.value}
                label={field.label}
                onChange={(event) => handler(event, formType, 'input')}
            >
                <option key={'none'} aria-label='None' value=''/>
                {
                    field.options.map(value => {
                        return <option key={value} value={value}>{value}</option>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectInput;
