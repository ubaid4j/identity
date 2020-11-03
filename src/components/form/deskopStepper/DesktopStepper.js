import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    stepProgress: {
        color: "red"
    }
}));


const DesktopStepper = ({formType, steps}) => {
    const classes = useStyles();
    return (
        <Stepper activeStep={formType.step} alternativeLabel>
            {steps.map((label) => (
                <Step
                    key={label}
                    className={classes.stepProgress}
                >
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

export default DesktopStepper;
