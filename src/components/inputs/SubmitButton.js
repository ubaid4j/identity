import Button from '@material-ui/core/Button';
import React, {forwardRef} from 'react';

const SubmitButton = forwardRef(({className, isDisable = false, label}, ref) => {
    return (
        <Button
            ref={ref}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{display: 'inline-flex'}}
            className={className}
            disabled={isDisable}>
            {label}
        </Button>
    );
})

export default SubmitButton;
