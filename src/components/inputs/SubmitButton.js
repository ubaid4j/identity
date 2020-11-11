import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import React, {forwardRef} from 'react';

const SubmitButton = forwardRef(function render({id, className, isDisable = false, label}, ref) {
    return (
        <Button
            id={id}
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

SubmitButton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    isDisable: PropTypes.bool,
    label: PropTypes.string,
}

