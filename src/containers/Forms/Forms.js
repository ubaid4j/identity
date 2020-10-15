import React, {useCallback, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from "../../components/form/Form";
import Paper from '@material-ui/core/Paper';
import IDENTITY_FORM from "../../shared/forms/Forms";
import formTypes from "../../shared/forms/FormTypes";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash'
import {updateForm} from "../../store/actions/Form";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        marginRight: "auto",
        marginLeft: "auto",
        width: "80%",
        height: "500px"
    },
    stepProgress: {
        color: "red"
    }
}));



function getSteps() {
    return formTypes.filter(type => type.step !== 5).map(type => type.label);
}



const Forms = () => {
    const classes = useStyles();
    const [formType, setFormType] = React.useState(formTypes[0]);
    const steps = getSteps();

    const dispatch = useDispatch();
    const submitFormInfo = useCallback((info, id) => dispatch(updateForm(info, id)), [dispatch]);
    const formId = useSelector(state => state.form.formId);
    const isFormUpdating = useSelector(state => state.form.isUpdating);

    const [identityForm, setIdentityForm] = useState(IDENTITY_FORM);

    const handleNext = () => {
        const form = _.clone(identityForm);
        const formData = {};
        for (let key in form) {
            const subForm = form[key];
            let info = {};
            for (let key in subForm) {
                if (subForm.hasOwnProperty(key)) {
                    const value = subForm[key];
                    info[key] = value['value'];
                }
            }
            formData[key] = info;
        }
        console.log("formId --> ", formId);
        console.log("isForm Updating --> ", isFormUpdating);
        submitFormInfo(formData, formId);
        setFormType((prevActiveStep) => formTypes[prevActiveStep.step + 1]);
    };

    const handleBack = () => {
        setFormType((prevActiveStep) => formTypes[prevActiveStep.step - 1]);
    };

    const handleReset = () => {
        setFormType(formTypes[0]);
    };

    const toggleInputsDisabled = (formType, isDisable) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        for (let field in subForm) {
            if (subForm.hasOwnProperty(field)) {
                if (subForm[field].type === 'text' || subForm[field].type === 'select') {
                    subForm[field].disabled = isDisable;
                }
            }
        }
        console.log('New Identity Form: => ', newIdentityForm);
        setIdentityForm(newIdentityForm);
    }

    const changeHandler = (event, formType, inputType) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        let fieldName = event.target.id;
        if (fieldName === undefined) {
            fieldName = event.target.name;
        }
        if (inputType === "check") {
            subForm[fieldName].value = event.target.checked;
            if (event.target.checked) {
                toggleInputsDisabled(formType, false);
            } else {
                toggleInputsDisabled(formType, true);
            }
        } else {
            subForm[fieldName].value = event.target.value;
        }
        setIdentityForm(newIdentityForm);
    }

    return (
        <div className={classes.root}>
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
            <div>
                {formType.step === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Paper elevation={3} className={classes.paper}>
                            <Form form={identityForm[formType.value]} formType={formType} handler={changeHandler}/>
                        </Paper>
                        <div>
                            <Button
                                disabled={formType.step === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {formType.step === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Forms;
