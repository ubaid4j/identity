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
import ModalView from "../../components/modal/ModalView";


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
    const [isNextButtonDisable, setNextButtonDisable] = useState(true);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleNext = () => {

        const form = _.clone(identityForm);
        const formData = {};
        for (let key in form) {
            const subForm = form[key];
            let info = {};
            for (let key in subForm) {
                if (subForm.hasOwnProperty(key)) {
                    const value = subForm[key];
                    if (!value.disabled) {
                        info[key] = value['value'];
                    }
                }
            }
            formData[key] = info;
        }
        console.log("formId --> ", formId);
        console.log("isForm Updating --> ", isFormUpdating);
        submitFormInfo(formData, formId);
        setFormType((prevActiveStep) => {
            setNextButtonEnable(formTypes[prevActiveStep.step + 1]);
            return formTypes[prevActiveStep.step + 1]
        });
    };

    const handleBack = () => {
        setFormType((prevActiveStep) => {
            setNextButtonEnable(formTypes[prevActiveStep.step - 1]);
            return formTypes[prevActiveStep.step - 1]
        });
    };

    const setNextButtonEnable = (formType) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        if (isValid(subForm)) {
            setNextButtonDisable(false);
        } else {
            setNextButtonDisable(true);
        }
    }


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
            const field = subForm[fieldName];
            field.value = event.target.value;
            field.validation.isTouched = true;
            field.validation.isValid = checkValidation(field.value, field.validation);
        }
        //validation checking
        if (isValid(subForm)) {
            setNextButtonDisable(false);
        } else {
            setNextButtonDisable(true)
        }
        //validation checking end
        setIdentityForm(newIdentityForm);
    }

    const checkValidation = (value, validation) => {
        value = String(value);
        return (value.length >= validation.minLength && value.length <= validation.maxLength);
    }

    const isValid = (subForm) => {
        for (let key in subForm) {
            if (subForm.hasOwnProperty(key)) {
                const field = subForm[key];
                console.log("Field: -> ", field);
                if (!field.disabled && !field.validation.isValid) {
                    console.log('Form is not valid -> returning false');
                    return false;
                }
            }
        }
        console.log("Form is Valid");
        return true;
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
                    </div>
                )}
            </div>
            <ModalView form={identityForm} open={isModalOpen} modalHandler={() => setModalOpen(false)}/>
        </div>
    );
}

export default Forms;
