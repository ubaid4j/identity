import MobileStepper from "@material-ui/core/MobileStepper";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";
import BackButton from "components/form/buttons/BackButton";
import NextButton from "components/form/buttons/NextButton";
import PreviewButton from "components/form/buttons/PreviewButton";
import {Grid} from "@material-ui/core";

const MobileStepperWidget = ({formType, steps, handleNext, handleBack, isNextButtonDisable, setModalOpen}) => {

    const backButton = <BackButton handleBack={handleBack} formType={formType}/>;
    const nextButton = <NextButton handleNext={handleNext} isNextButtonDisable={isNextButtonDisable}/>;
    const previewButton = <PreviewButton handleNext={handleNext} isNextButtonDisable={isNextButtonDisable} setModalOpen={setModalOpen}/>;

    const nextView = formType.step !== steps.length - 1 ? nextButton : previewButton;

    return (
        <>
            <Grid container justify={'center'} style={{marginTop: '8px'}}>
                <Grid item>
                    <StepLabel>{steps[formType.step]}</StepLabel>
                </Grid>
            </Grid>
            <MobileStepper activeStep={formType.step} alternativeLabel
                           variant={'text'}
                           backButton={backButton} nextButton={nextView}
                           steps={steps.length} />
        </>
    );
}

export default MobileStepperWidget;
