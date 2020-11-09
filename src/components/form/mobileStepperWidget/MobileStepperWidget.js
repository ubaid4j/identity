import MobileStepper from "@material-ui/core/MobileStepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import React from "react";
import BackButton from "components/form/buttons/BackButton";
import NextButton from "components/form/buttons/NextButton";
import PreviewButton from "components/form/buttons/PreviewButton";

const MobileStepperWidget = ({formType, steps, handleNext, handleBack, isNextButtonDisable, setModalOpen}) => {

    const backButton = <BackButton handleBack={handleBack} formType={formType}/>;
    const nextButton = <NextButton handleNext={handleNext} isNextButtonDisable={isNextButtonDisable}/>;
    const previewButton = <PreviewButton handleNext={handleNext} isNextButtonDisable={isNextButtonDisable} setModalOpen={setModalOpen}/>;

    const nextView = formType.step !== steps.length - 1 ? nextButton : previewButton;

    const stepsView = (
        steps.map((label) => (
            <Step key={label} style={{color: 'red'}}>
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
