import TextField from "@material-ui/core/TextField";
import React from "react";

const FormTextField = ({type, field, handler, formType}) => {
    return (
        <TextField
            type={type}
            error={field.validation.isTouched && !field.validation.isValid}
            helperText={field.helperText}
            disabled={field.disabled}
            hidden={field.hidden}
            key={field.id}
            required={field.validation.required}
            id={field.id}
            label={field.label}
            variant='outlined'
            value={field.value}
            placeholder={field.placeholder}
            onChange={(event) => handler(event, formType, 'input')}/>
    );
}
export default FormTextField;
