import React from "react";
import BackButton from "components/form/buttons/BackButton";
import NextButton from "components/form/buttons/NextButton";
import PreviewButton from "components/form/buttons/PreviewButton";

const DesktopStepperButtons = ({formType, steps, handleBack, handleNext, isNextButtonDisable, setModalOpen}) => {

    const backButton = <BackButton formType={formType} handleBack={handleBack}/>;
    const nextButton = <NextButton isNextButtonDisable={isNextButtonDisable} handleNext={handleNext}/>;
    const previewButton = <PreviewButton handleNext={handleNext} setModalOpen={setModalOpen} isNextButtonDisable={isNextButtonDisable}/>;

    const nextView = formType.step !== steps.length - 1 ? nextButton : previewButton;

    return (
        <div>
            {backButton}
            {nextView}
        </div>
    );
}
export default DesktopStepperButtons;
