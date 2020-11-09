import Button from "@material-ui/core/Button";
import React from "react";

const PreviewButton = ({handleNext, setModalOpen, isNextButtonDisable}) => {
    return (
        <Button id={'previewButton'} variant="contained" color="primary" onClick={() => {handleNext(); setModalOpen(true)}} disabled={isNextButtonDisable}>
            Preview
        </Button>
    );
}
export default PreviewButton;
