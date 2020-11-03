import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Check = ({field, formType, handler}) => {
    return (
        <FormControlLabel
            key={field.id}
            label={field.label}
            labelPlacement={'end'}
            control={
                <Checkbox
                    key={field.id}
                    value={field.value}
                    checked={field.value}
                    onChange={event => handler(event, formType, 'check')}
                    id={field.id}
                />
            }
        />
    );
}

export default Check;
