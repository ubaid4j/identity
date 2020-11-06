import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    }
}));

const BackButton = ({formType, handleBack}) => {
    const classes = useStyles();
    return (
        <Button disabled={formType.step === 0} onClick={handleBack} className={classes.backButton}>
            Back
        </Button>
    );
}
export default BackButton;
