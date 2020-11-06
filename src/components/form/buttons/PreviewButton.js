import Button from "@material-ui/core/Button";
import React from "react";

const PreviewButton = ({setModalOpen, isNextButtonDisable}) => {
    return (
        <Button variant="contained" color="primary" onClick={() => setModalOpen(true)} disabled={isNextButtonDisable}>
            Preview
        </Button>
    );
}
export default PreviewButton;
