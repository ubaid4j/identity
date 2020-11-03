import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
}));

const DesktopStepperButtons = ({formType, steps, handleBack, handleNext, isNextButtonDisable, setModalOpen}) => {
    const classes = useStyles();
    return (
        <div>
            <Button
                disabled={formType.step === 0}
                onClick={handleBack}
                className={classes.backButton}
            >
                Back
            </Button>
            {
                formType.step !== steps.length - 1 ?
                    <Button variant="contained" color="primary" onClick={handleNext}
                            disabled={isNextButtonDisable}>
                        Next
                    </Button> :
                    <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}
                            disabled={isNextButtonDisable}>
                        Preview
                    </Button>
            }
        </div>
    );
}

export default DesktopStepperButtons;
