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

const SelectInput = ({formType, required, id, disabled, label, value, options, handler}) => {
    const classes = useStyles();
    return (
        <FormControl
            required={required}
            variant='outlined'
            className={classes.formControl}
            key={id}
            disabled={disabled}
        >
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                required={required}
                native
                labelId={id}
                key={id}
                id={id}
                name={id}
                value={value}
                label={label}
                onChange={(event) => handler(event, formType, 'input')}
            >
                <option key={'none'} aria-label='None' value=''/>
                {
                    options.map(value => {
                        return <option key={value} value={value}>{value}</option>
                    })
                }
            </Select>
        </FormControl>
    );
}

export default SelectInput;
