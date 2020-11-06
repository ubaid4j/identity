import Button from "@material-ui/core/Button";
import React from "react";

const NextButton = ({handleNext, isNextButtonDisable}) => {
    return (
        <Button variant="contained" color="primary" onClick={handleNext} disabled={isNextButtonDisable}>
            Next
        </Button>
    );
}
export default NextButton;
