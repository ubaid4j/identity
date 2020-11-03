import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
    stepProgress: {
        color: "red"
    }
}));


const MobileStepperWidget = ({formType, steps, handleNext, handleBack, isNextButtonDisable, setModalOpen}) => {
    const classes = useStyles();

    const backButton = (
        <Button
            disabled={formType.step === 0}
            onClick={handleBack}
            className={classes.backButton}
        >
            Back
        </Button>
    );

    const nextButton = (
        <Button variant="contained" color="primary" onClick={handleNext}
                disabled={isNextButtonDisable}>
            Next
        </Button>
    );

    const previewButton = (
        <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}
                disabled={isNextButtonDisable}>
            Preview
        </Button>
    );

    const nextView = formType.step !== steps.length - 1 ? nextButton : previewButton;

    const stepsView = (
        steps.map((label) => (
            <Step
                key={label}
                className={classes.stepProgress}
            >
                <StepLabel>{label}</StepLabel>
            </Step>
        ))
    );

    return (
        <MobileStepper activeStep={formType.step} alternativeLabel
                       backButton={backButton} nextButton={nextView}
                       steps={stepsView} />
    );
}

export default MobileStepperWidget;
