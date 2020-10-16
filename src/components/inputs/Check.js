import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Check = ({id, label, value, formType, handler}) => {
    return (
        <FormControlLabel
            key={id}
            label={label}
            labelPlacement={"end"}
            control={
                <Checkbox
                    key={id}
                    value={value}
                    checked={value}
                    onChange={event => handler(event, formType, "check")}
                    id={id}
                />
            }
        />
    );
}

export default Check;
