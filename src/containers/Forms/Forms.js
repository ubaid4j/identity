import React, {useCallback, useContext, useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Form from "../../components/form/Form";
import Paper from '@material-ui/core/Paper';
import IDENTITY_FORM from "../../shared/forms/Forms";
import formTypes from "../../shared/forms/FormTypes";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash'
import {updateForm} from "../../store/actions/Form";
import DialogView from "../../components/modal/DialogView";
import {UserContext} from "../../providers/UserProvider";
import {Redirect} from "react-router";
import MobileStepper from '@material-ui/core/MobileStepper';
import {Container} from "@material-ui/core";


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
    const [isSubFormComplete, setSubFormComplete] = useState(false);
    const steps = getSteps();

    const user = useContext(UserContext);

    const dispatch = useDispatch();
    const submitFormInfo = useCallback((info, id, user) => dispatch(updateForm(info, id, user)), [dispatch]);
    const formId = useSelector(state => state.form.formId);
    const form = useSelector(state => state.form.form);
    const isFormComplete = useSelector(state => state.login.formInfo ? state.login.formInfo.isFormCompleted : null)

    const [identityForm, setIdentityForm] = useState(IDENTITY_FORM);
    const [isNextButtonDisable, setNextButtonDisable] = useState(true);

    const [isModalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        clearFormData();
        if (formId !== null) {
            const newIdentityForm = _.clone(identityForm);
            for (let key in newIdentityForm) {
                const subForm = newIdentityForm[key];
                const subRemoteForm = form[key];
                for (let field in subRemoteForm) {
                    if (field === 'isCompleted') continue;
                    if (subRemoteForm.hasOwnProperty(field)) {
                        if (subRemoteForm.isCompleted) {
                            setSubFormComplete(true);
                            subForm[field].value = subRemoteForm[field];
                            subForm[field].validation.isValid = true;
                            subForm[field].validation.isTouched = true;
                        }
                    }
                }
            }
            setIdentityForm(newIdentityForm);
            setNextButtonEnable(formTypes[0]);
        }

    }, []);

    function getFormData() {
        const form = _.clone(identityForm);
        const formData = {};
        for (let key in form) {
            const subForm = form[key];
            let info = {};
            const subFormTypes = formTypes.slice(0, formType.step + 1).map(value => value.value);
            if (subFormTypes.includes(key)) {
                info['isCompleted'] = isSubFormComplete;
            }
            for (let subKey in subForm) {
                if (subForm.hasOwnProperty(subKey)) {
                    const value = subForm[subKey];
                    if (!value.disabled) {
                        info[subKey] = value['value'];
                    }
                }
            }
            formData[key] = info;
        }
        return formData;
    }

    const clearFormData = () => {
        const newIdentityForm = _.clone(identityForm);
        for (let key in newIdentityForm) {
            const subForm = newIdentityForm[key];
            if (subForm === IDENTITY_FORM.PROFESSIONAL_INFO || subForm === IDENTITY_FORM.EXCISE_INFO || subForm === IDENTITY_FORM.RESIDENT_INFO) {
                for (let key in subForm) {
                    if (key === 'isCompleted') continue;
                    if (subForm.hasOwnProperty(key)) {
                        const field = subForm[key];
                        if (field.type === 'check') {
                            field.value = false
                        } else {
                            field.disabled = true;
                            field.value = "";
                            field.validation.isValid = false;
                            field.validation.isTouched = false;
                        }
                    }
                }
            } else {
                for (let key in subForm) {
                    if (subForm.hasOwnProperty(key)) {
                        const field = subForm[key];
                        field.value = "";
                        if (field.validation.required) {
                            field.validation.isValid = false;
                            field.validation.isTouched = false;
                        } else {
                            field.validation.isValid = true;
                        }
                    }
                }
            }
        }
        setIdentityForm(newIdentityForm);
    }

    const handleSaveForm = () => {
        setModalOpen(false);
        const formData = getFormData();
        formData['isFormCompleted'] = true;
        submitFormInfo(formData, formId, user);
        setFormType(formTypes[0]);
        setNextButtonDisable(true);
        clearFormData();
    }

    const handleNext = () => {
        const formData = getFormData();
        formData['isFormCompleted'] = false;
        submitFormInfo(formData, formId, user);
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
        setIdentityForm(newIdentityForm);
    }

    const changeHandler = (event, formType, inputType) => {
        const newIdentityForm = _.clone(identityForm);
        const subForm = newIdentityForm[formType.value];
        let fieldName = event.target.id || event.target.name;
        if (inputType === "check") {
            subForm[fieldName].value = event.target.checked;
            toggleInputsDisabled(formType, !event.target.checked);
        } else {
            const field = subForm[fieldName];
            field.helperText = '';
            field.value = event.target.value;
            field.validation.isTouched = true;

            field.validation.isValid = field.pattern ? _.clone(field.pattern).test(field.value) : true;
            field.helperText = !field.validation.isValid ? field.text : '';
        }
        setSubFormComplete(isValid(subForm));
        setNextButtonDisable(!isValid(subForm));
        setIdentityForm(newIdentityForm);
    }

    const isValid = (subForm) => {
        for (let key in subForm) {
            if (key === 'isCompleted') continue;
            if (subForm.hasOwnProperty(key)) {
                const field = subForm[key];
                if (!field.disabled && !field.validation.isValid) {
                    return false;
                }
            }
        }
        console.log("Form is Valid");
        return true;
    }

    if (isFormComplete) {
        return <Redirect to="/identity/congrats"/>
    }

    const mobileStepper = (
        <MobileStepper activeStep={formType.step} alternativeLabel backButton={
            <Button
                disabled={formType.step === 0}
                onClick={handleBack}
                className={classes.backButton}
            >
                Back
            </Button>

        } nextButton={
            formType.step !== steps.length - 1 ?
                <Button variant="contained" color="primary" onClick={handleNext}
                        disabled={isNextButtonDisable}>
                    Next
                </Button> :
                <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}
                        disabled={isNextButtonDisable}>
                    Preview
                </Button>

        } steps={
            steps.map((label) => (
                <Step
                    key={label}
                    className={classes.stepProgress}
                >
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))
        }>
        </MobileStepper>

    );

    const desktopStepper = (
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
    );

    const desktopButton = (
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

    return (
        <Container>
            {
                window.screen.width < 600 ? mobileStepper : desktopStepper
            }
            <div className={classes.root}>
                <div>
                    <div>
                        <Paper elevation={3} className={classes.paper}>
                            <Form form={identityForm[formType.value]} formType={formType} handler={changeHandler}/>
                        </Paper>
                    </div>
                    {
                        window.screen.width >= 600 ? desktopButton : null
                    }
                </div>
                <DialogView form={form} open={isModalOpen} modalHandler={() => setModalOpen(false)}
                            saveFormHandler={handleSaveForm}/>
            </div>
        </Container>
    );
}

export default Forms;
