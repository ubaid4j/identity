import PropTypes from 'prop-types';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";

const DesktopStepper = ({formType, steps}) => {
    return (
        <Stepper activeStep={formType.step} alternativeLabel>
            {steps.map((label) => (
                <Step key={label} style={{color: 'red'}}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}
export default DesktopStepper;

DesktopStepper.propTypes = {
    formType: PropTypes.object,
    steps: PropTypes.array
}
