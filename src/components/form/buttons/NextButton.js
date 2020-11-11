import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import React from "react";

const NextButton = ({handleNext, isNextButtonDisable}) => {
    return (
        <Button id={'nextFormButton'} variant="contained" color="primary" onClick={handleNext} disabled={isNextButtonDisable}>
            Next
        </Button>
    );
}
export default NextButton;

NextButton.propTypes = {
    handleNext: PropTypes.func,
    isNextButtonDisable: PropTypes.bool
}
